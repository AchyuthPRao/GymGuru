import React from 'react'
import "../Styles.css"

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-4 ">
  <div class="container-fluid mynav">
    <a class="navbar-brand px-2" href="#">GymGuru</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Contact Us</a>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
