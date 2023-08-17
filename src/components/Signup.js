import React from 'react'
import "../style.css"
import { Link } from 'react-router-dom'


export default function Signup() {
  return (
    <div>
      <div class="form">
        
        <div class="email">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Write your email" />
        </div>
        
        <div class="pass">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="password" />
        </div>

        
        <button id="submit-btn" onclick="signUp()">Sign Up</button>
        <p>Already have an account ?</p>
        <span><Link to="/signin">Sign In</Link></span>
    </div>

    <script src="./main.js"></script>
    </div>
  )
}
