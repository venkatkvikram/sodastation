import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Menu from './components/Menu';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navigationbar />
      <HomePage />
      <About />
      <Menu />
      {/* <HomePage />
      <About />
      <Menu /> */}
    </div>
  );
}

export default App;
