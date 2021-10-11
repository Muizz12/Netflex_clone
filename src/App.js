
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Rows from './components/Rows';
import request from './request';
function App() {
  return (
    <div className="app">
       <NavBar/>
      <Banner  FethcURl={request.fetchComedyMovies}/>
     
     <Rows title="NETFLX ORIGINALS" FethcURl={request.fetchNetflixOriginals} isLargerRow/>
     <Rows title="Trending Now" FethcURl={request.fetchTrending}/>
     <Rows title="Top Rated" FethcURl={request.fetchTopRated}/>
     <Rows title="ComedyMovies" FethcURl={request.fetchComedyMovies}/>
     <Rows title="HorrorMovies" FethcURl={request.fetchHorrorMovies}/>
     <Rows title="RomanceMovies" FethcURl={request.fetchRomanceMovies}/>
     <Rows title="Documentaries" FethcURl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
