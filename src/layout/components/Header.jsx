import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Task APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/tasks">
                Tasks
              </Link>
              <Link className="nav-link" to="/create-task">
                Create task
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
