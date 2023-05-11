import './App.css';
import Banner from './componnets/Banner';
import Nav from './componnets/Nav';
import Row from './componnets/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row isPoster={true} title={'Netflix Orginals'} fetchURL={requests.fetchNetflixOriginals} />
      <Row title={'Trending'} fetchURL={requests.fetchTrending} />
      <Row title={'Top Rated'} fetchURL={requests.fetchTopRated} />
      <Row title={'Action'} fetchURL={requests.fetchActionMovies} />
      <Row title={'Comedy'} fetchURL={requests.fetchComedyMovies} />
      <Row title={'Horror'} fetchURL={requests.fetchHorrorMovies} />
      <Row title={'Romance'} fetchURL={requests.fetchRomanceMovies} />
      <Row title={'Documentaries'} fetchURL={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
