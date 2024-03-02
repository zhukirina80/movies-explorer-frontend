import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register'
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
//import Preloader from '../Preloader/Preloader';

function App() {

  const navigate = useNavigate()

  function handleRegister() {
    console.log('Вы успешно зарегистрировались');
    navigate('/movies');
  }
  
  function handleLogin() {
    console.log('Вы успешно вошли');
    navigate('/movies');
  }

  function handleUpdateUser() {
    console.log('Вы изменили данные');
    navigate('/profile');
  }

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={
          <>
            <Header headerName="landing" navigationName ="authorized"/>
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
        <Route path='/profile' element={
          <>
            <Header headerName="profile" navigationName ="authorized" />
            <Profile userName="Ирина" onUpdateUser={handleUpdateUser}/>
          </>
        }/>
        <Route path='/movies' element={
        <>
          <Header headerName="profile" navigationName ="authorized" />
          <Movies />
          <Footer/>
          {/* <Preloader/> */}
        </>
        }/>
        <Route path='/saved-movies' element={
          <>
            <Header headerName="profile" navigationName ="authorized" />
            <SavedMovies/>
            <Footer/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
