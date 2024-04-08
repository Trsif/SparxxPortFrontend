import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Nav/navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <body className="App">
        <Navbar />
        <Home />
        <Contact />
    </body>
  );
}

export default App;
