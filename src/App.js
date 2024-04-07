import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Nav/navbar";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
