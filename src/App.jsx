import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Header/><Home/><Footer/></>} />
          <Route path="/about" element={<><Header/><About/><Footer/></>} />
          <Route path="/team" element={<><Header/><Team/><Footer/></>} />
          <Route path="/events" element={<><Header/><Events/><Footer/></>} />
          <Route path="/blogs" element={<><Header/><Blogs/><Footer/></>} />
          <Route path="/contact" element={<><Header/><Contact/><Footer/></>} />
        </Routes>
      </Router>  
    </>
  );
}

export default App;
