import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { register, authorize, checkToken } from '../../utils/auth.js';
import mainApi from '../../utils/MainApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register'
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedPageProfile from '../ProtectedPageProfile/ProtectedPageProfile.js';
import ProtectedPageMovies from '../ProtectedPageMovies/ProtectedPageMovies.js';
import ProtectedPageSavedMovies from '../ProtectedPageSavedMovies/ProtectedPageSavedMovies.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';

function App() {
  const loggedInFromStorage = JSON.parse(localStorage.getItem('loggedIn'));
 
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(loggedInFromStorage);
  const [userName, setUserName] = useState('');
  const [isInfoPopupOpen, setisInfoPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [conflictError, setConflictError] = useState(false);
  
  const handleRequestUserInfo = () => {
    mainApi.loadUserInfo()
      .then((currentUser) => {
        setCurrentUser(currentUser);
      })
      .catch((err) => {
        console.error(`Ошибка при загрузке данных пользователя ${err}`);
        localStorage.clear();
      })
  } 

  const handleRequestSavedMovies = () => {
    mainApi.getSavedMovies(currentUser._id)
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.error(`Ошибка при загрузке фильмов пользователя ${err}`);
        setServerError(true);
        localStorage.clear();
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      handleRequestUserInfo();
      handleRequestSavedMovies();
    }
  }, [loggedIn]) 

  useEffect(() => { 
    if (localStorage.jwt) {
        checkToken(localStorage.jwt)
        .then((res) => {
          setUserName(res.name);
          localStorage.setItem('loggedIn', true);
          setLoggedIn(true);
        })
        .catch(console.err)
      } else {
        setLoggedIn(false);
        localStorage.setItem('loggedIn', false);
        localStorage.clear();
      }
    }, [loggedIn])

  function handleRegister({ name, email, password }) {
    return register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin({ email, password });
          return res;
        } else {
          throw new Error('При регистрации пользователя произошла ошибка')
        }
      })
  }
  
  function handleLogin({ email, password }) {
    return authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          localStorage.setItem('loggedIn', true);
          navigate('/movies');
          return res;
        } else {
          throw new Error('При авторизации произошла ошибка. Переданный токен некорректен')
        }
       })
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    localStorage.clear();
    setCurrentUser({});
    navigate('/');
  }

  function handleUpdateUser({ name, email }) {
    return mainApi.patchUserInfo({ name, email })
    .then((currentUser) => {
      setCurrentUser(currentUser);
      setUserName(currentUser.name);
    })
    .then(() => {
      setisInfoPopupOpen(true);
      setIsSuccess(true);
    })
    .catch((err) => {
      setisInfoPopupOpen(true);
      setIsSuccess(false);
      console.error(`Ошибка при обновлении профиля ${err}`);
      if (err.includes('409')) {
        setConflictError(true);
      } else {
        setConflictError(false);;
      }
    })
  }

  const closeInfoPopup = () => {
    setisInfoPopupOpen(false);
  }

  function handleDeleteMovie(movieID) {
    mainApi.deleteMovie(movieID)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => { return movie._id !== movieID }))
      })
      .catch((err) => console.error(`Ошибка при удалении фильма ${err}`))
  }

  function handleToggelSaveMovie(data) {
    const isMoveSaved = savedMovies.some(c => data.id === c.movieId)
    const selectedMovie = savedMovies.filter((movie) => {
      return movie.movieId === data.id
    })
    if (isMoveSaved) {
      handleDeleteMovie(selectedMovie[0]._id)
    } else {
      mainApi.addMovie(data)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((err) => console.error(`Ошибка при сохранении фильма ${err}`))
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path='/' element={
            <>
              <Header headerName="landing" navigationName={loggedIn ? "authorized" : "unauthorized"}/>
              <Main/>
              <Footer/>
            </>
          }/>
          <Route path='/signup' element={
              <Register onRegister={handleRegister}/>
          }/>
          <Route path='/signin' element={
              <Login onLogin={handleLogin}/>
          }/>
          <Route path='*' element={
              <NotFoundPage/>
          }/>
          <Route path='/profile' element={<ProtectedRoute 
            component={ProtectedPageProfile}
            loggedIn={loggedIn}
            headerName="profile"
            navigationName="authorized"
            userName={userName}
            onUpdateUser={handleUpdateUser}
            onSignOut={handleSignOut}
            />
          }/>
          <Route path='/movies' element={<ProtectedRoute 
            component={ProtectedPageMovies}
            loggedIn={loggedIn}
            headerName="profile" 
            navigationName ="authorized"
            savedMovies={savedMovies} 
            addMovie ={handleToggelSaveMovie}
            />
          }/>
          <Route path='/saved-movies' element={<ProtectedRoute 
            component={ProtectedPageSavedMovies}
            loggedIn={loggedIn}
            headerName="profile" 
            navigationName ="authorized"
            savedMovies={savedMovies} 
            serverError={serverError} 
            onDelite={handleDeleteMovie}
            />
          }/>
        </Routes>
        <InfoTooltip
          isSuccess={isSuccess}
          isOpen={isInfoPopupOpen}
          onClose={closeInfoPopup}
          text={isSuccess ? 'Вы успешно обновили профиль!' 
            : conflictError ? 
            'Пользователь с таким email уже существует' 
            : 'При обновлении профиля произошла ошибка'} 
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
