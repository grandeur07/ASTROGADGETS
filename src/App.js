
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addgadget from './components/Addgadget';
import Getgadget from './components/Getgadget';
import Endnote from './components/Endnote';
import Mpesapayement from './components/Mpesapayement'





function App() {
  return (
    <Router>
      <div className='App'>
        <div className='App-header'>
          
          {/* This is the first main row */}
          {/* Links */}
          <div className='row'>
            <div className='col-md-12'>
              <nav className='navbar navbar-expand-md  m-2'>
                <a href="/" class="navbar-brand ">
                  <h1 className='text-white'>ASTROGAMES</h1>
                </a>

                {/* Collapsable button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarcollapse">
                  <div className="navbar-nav ms-auto">
                      <Link to="/" className='btn btn-outline-danger ms-2'>Gadgets</Link>
                      <Link to="/signup" className='btn btn-outline-danger ms-2'>Signup</Link>
                      <Link to="/signin" className='btn btn-outline-danger ms-2'>Signin</Link>
                      <Link to="/addgadget" className='btn btn-outline-danger ms-2'>AddGadget</Link>
                      
                  </div>
                </div>
              </nav>
            </div>
          </div>

        
        </div>
        <br />
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/addgadget' element={<Addgadget/>}/>
          <Route path='/' element={<Getgadget/>}/>
          <Route path='/mpesapayement' element={<Mpesapayement/>}/>
        </Routes>

      </div>
      <Endnote/>

    </Router>
  );
}

export default App;
