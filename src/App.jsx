import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Header/> <Home/><Footer/></>} />
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
