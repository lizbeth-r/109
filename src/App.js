import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
