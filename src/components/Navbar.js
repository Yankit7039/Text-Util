import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for additional CSS tweaks

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm sticky-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 fw-bold" to="/" style={{ color: props.mode === 'light' ? '#333' : '#fff' }}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" style={{ color: props.mode === 'light' ? '#333' : '#fff' }} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: props.mode === 'light' ? '#333' : '#fff' }} to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Set the title here',
  aboutText: 'About',
};
