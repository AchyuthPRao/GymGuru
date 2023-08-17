import './App.css';

import Chat from './components/Chat';
import Vanta from './components/Vanta';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Nav from './components/Nav'

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
    <Route exact path ="/signup" element={<Signup/>}></Route>
    <Route exact path ="/" element={<Vanta/>}></Route>
        {/* <Nav /> */}
      {/* <Routes>
        <Route exact path ="/contact" element={<Contact/>}></Route>
        <Route exact path ="/" element={<Vanta />}></Route>
        <Route exact path ="/chat" element={<Chat/>}></Route>
      </Routes> */}
      <Route exact path ="/contact" element={<Contact/>}></Route>
      <Route exact path ="/signin" element={<Signin/>}></Route>
      
      </Routes>
  </BrowserRouter>
  
    
  );
}

export default App;
