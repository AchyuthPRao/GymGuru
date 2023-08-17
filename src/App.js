import './App.css';
import { useState } from 'react';
// import Body from './components/Body';
import Nav from './components/Nav';
// <<<<<<< HEAD
// import Vanta from './components/Vanta';
// =======
import Chat from './components/Chat';
// >>>>>>> baeffa4d00e422f0195af8b51570fbc617df48e3

function App() {

  return (
    <div >
        {/* <Nav /> */}
        {/* <Vanta /> */}
        {/* <Body /> */}
      <Nav />
      <Chat />
    </div>
  );
}

export default App;
