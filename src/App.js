import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Mobile from './pages/Mobile';
import Laptop from './pages/Laptop';
import Apple from './pages/Apple';
import Dell from './pages/Dell';
import Header from './components/Header/Header';




function App() {
  return (
    <div className='relative bg-[#f2f2f2]'>
  
      <Router>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/lap-top' element={<Laptop/>}></Route>
          <Route path='/mobile' element={<Mobile/>}></Route>
          <Route path='/apple' element={<Apple/>}></Route>
          <Route path='/dell' element={<Dell/>}></Route>
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
