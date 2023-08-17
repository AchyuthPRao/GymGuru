import './App.css';

import Chat from './components/Chat';
import Vanta from './components/Vanta';
import Contact from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bmi from './components/Bmi';
import About from './components/About';

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
    <Route exact path ="/" element={<Vanta/>}></Route>
      <Route exact path ="/contact" element={<Contact/>}></Route>
      <Route exact path ="/chat" element={<Chat/>}></Route> 
      <Route exact path ="/bmi" element={<Bmi/>}></Route> 
      <Route exact path ="/about" element={<About/>}></Route> 
      </Routes>
  </BrowserRouter>
  
    
  );
}

export default App;
