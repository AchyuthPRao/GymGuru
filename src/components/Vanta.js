import React, { useState, useEffect, useRef } from 'react'
import HALO from 'vanta/dist/vanta.halo.min';
import '../Vanta.css';
import '../App.css';
import Nav from "../components/Nav"
import { Link } from 'react-router-dom';

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <>
    <Nav/>
  <div id="myBg" ref={myRef}>
     <div class="head mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl light:text-white">Hey! This is your Ai fitness assistant GymGuru</div>
  </div>
  <div className="ok">
  <Link to="/chat">
  <button className='uibtn'>
    <span>
    Click To chat
    </span>
  </button>
  </Link>
  </div>
  </>)
}
export default MyComponent