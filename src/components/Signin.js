import React from 'react'

export default function Signin() {
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
        <button id="submit-btn" onclick="signIn()">Sign In</button>
    </div>
    <script src="./main.js"></script>
    </div>
  )
}
