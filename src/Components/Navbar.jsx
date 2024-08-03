import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/faq">Faq</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/card">Card</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 d-flex">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
     </>
  )
}

export default Navbar