import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

import BlogList from './Components/BlogList';

import FetchRouting from './Components/FetchRouting';
import BlogItemDetails from './Components/FRItemDetails';

import CryptoCurrency from './Components/CryptoCurrency';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>

          <Route path='/bloglist' element={<BlogList/>}></Route>
          
          <Route path='/blogs' element={<FetchRouting/>}></Route>
          <Route path='/blogs/:id' element={<BlogItemDetails/>}></Route>

          <Route path='/currency' element={<CryptoCurrency/>}></Route>
      </Routes>
      
    </> 
  )
}

export default App;
