import './App.css';
import Row from './componnets/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>NETFLIX</h1>
      <Row title={'Netflix Orginals'} fetchURL={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
