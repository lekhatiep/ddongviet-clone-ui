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
          <Route path='/apple-macbook-imac' element={<Laptop/>}></Route>
          <Route path='/xiaomi' element={<Mobile/>}></Route>
          <Route path='/dien-thoai-iphone' element={<Apple/>}></Route>
          <Route path='/macbook-pro' element={<Dell/>}></Route>
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
