import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

    const router = createBrowserRouter([
        {path: "/", element: <><Header/><Home/><Footer/> </> },
        {path: "/about", element:<><Header/><About/><Footer/></> },
        {path: "/team", element: <><Header/><Team/><Footer/> </>},
        {path: "/events", element: <><Header/><Events/><Footer/> </> },
        {path: "/blogs", element: <><Header/><Blogs/><Footer/> </> },
        {path: "/contact", element: <><Header/><Contact/><Footer/> </> },
    ])
  return (
    <>
    <RouterProvider router = {router} />  
    </>
  );
}

export default App;
