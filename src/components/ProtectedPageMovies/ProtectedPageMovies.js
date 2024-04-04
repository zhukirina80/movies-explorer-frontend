import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function ProtectedPageMovies ({ savedMovies, addMovie }) {
   return (
    <>
      <Header />
      <Movies
        savedMovies={savedMovies} 
        addMovie ={addMovie}
      />
      <Footer/>
    </>
   )
}

export default ProtectedPageMovies;