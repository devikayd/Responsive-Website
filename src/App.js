import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Sliding from './components/Sliding';
import Destination from './components/Destination';
import Slidertwo from './components/Slidertwo';
import Footersection from './components/Footersection';
import Reviews from './components/Reviews';

function App() {
  return (

    <div id='navbar' className="App">
      <NavBar />
      <div id='intro'>
        <Sliding />
      </div>
      <div id='destination' className="div-container">
    
        <Destination />
        <Slidertwo />
        <Reviews />
      </div>
      <Footersection />
    </div>
  );
}

export default App;
