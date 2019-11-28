import React, { useState } from "react";
import s from "../styling/Navbar.module.scss";
// import LoginRegister from "./LoginRegister/LoginRegister";
import {
  Button,
  Alert,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal
} from "reactstrap";
// import Modal from 'react-modal'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  return (
    <nav className="navbar navbar-expand-lg container">
      <a className={`navbar-brand ${s.logoContainer}`} href="#">
        Navbar
      </a>
      <button
        className={`navbar-toggler ${s.toggler}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className={`${s.burgerIcon} d-flex flex-column`}>
          <span className={`navbar-toggler-icon ${s.top}`}></span>
          <span className={`navbar-toggler-icon ${s.middle}`}></span>
          <span className={`navbar-toggler-icon ${s.bottom}`}></span>
        </div>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link asd" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <div className={s.loginSignupContainer}>
          <span className={s.login}>Login</span>
          <Button variant="primary" type="button" className={`btn ${s.signUp}`} onClick={handleShow}>
            Sign up
          </Button>
          <Modal isOpen={isOpen}>
            <form>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name"/>
                </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Last name"/>
                  </div>
                  <div className="col">
                    <input type="password" placeholder="Enter password"/>
                  </div>
                  </div>
                  <button className={`btn btn-success`} type="submit">Submit</button>
                </form>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
            </Button>
          </Modal>
        </div>
      </div>
    </nav>
        );
      }
      
      export default Navbar;
