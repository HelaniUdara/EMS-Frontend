import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand alert-link" href="#">
          EMS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to="/">
            <a className="nav-link active">
              Employee List <span className="sr-only">(current)</span>
            </a></Link>
            <Link to="/addEmployee">
            <a className="nav-link" >
              Add Employee
            </a></Link>
          </div>
        </div>
      </nav>
        </header>
    </div>
  )
}
