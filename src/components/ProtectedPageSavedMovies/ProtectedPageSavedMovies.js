import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

function ProtectedPageSavedMovies ({ savedMovies, serverError, onDelite }) {
   return (
    <>
      <Header />
      <SavedMovies
        savedMovies={savedMovies} 
        serverError={serverError} 
        onDelite={onDelite}
      />
      <Footer/>
    </>
   )
}

export default ProtectedPageSavedMovies;