import React from "react";
import { Navbar, Dropdown, ButtonGroup, Button, Stack } from "react-bootstrap";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";

function NavbarCMS() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex mb-3">
        <div className="p-2">
          <button className="btn btn-light h1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            ≡
          </button>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header p-0">
              <div className="z-5 position-absolute mt-5 pt-5 rounded-3">
                {/* <div class="pt-3 mt-1"><img src="./aset/greybox2.png" alt="s" /></div> */}
                <ul className="pt-3 mt-5" style={{ listStyle: "none" }}>
                  <li>
                    <div className="pt-3 mt-3">
                      <img src={require("../../aset/greybox2.png")} alt="s" />
                    </div>
                  </li>
                  <li>
                    <div className="pt-3 mt-3">
                      <img src={require("../../aset/rumah.png")} alt="s" />
                    </div>
                  </li>
                  <li>
                    <div className="pt-3 mt-3">
                      <img src={require("../../aset/truck.png")} alt="s" />
                    </div>
                  </li>
                </ul>
                {/* <div class="pt-3 mt-2"><img src="./aset/truck.png" alt="s" /></div> */}
              </div>
              {/* <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
            </div>
            <div className="offcanvas-body p-0">
              <div className="quarter-blue" />
              <div className="content-wrapper">
                <div className="list-group list-group-flush mx-3 mt-4">
                  <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <i className="fas fa-tachometer-alt fa-fw me-3" />
                    <span>
                      {" "}
                      <img src={require("../../aset/greybox.png")} className="offcanvas-title" id="offcanvasWithBothOptionsLabel" />
                    </span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <i className="fas fa-tachometer-alt fa-fw me-3" />
                    <span>Dashboard</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                    <i className="fas fa-chart-area fa-fw me-3" />
                    <span>Cars</span>
                  </a>
                </div>
              </div>
              <div style={{ clear: "both" }} />
            </div>
          </div>
        </div>
        <div className="ms-auto p-2">
          <div className="d-flex justify-content-between">
            <nav className="navbar navbar-expand-lg">
              <div className="container d-flex justify-content-between">
                <div className="d-flex">
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown mx-4">
                        <div className="d-flex">
                          <img src={require("../../aset/u.png")} alt="" className="w-25" />
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {" "}
                            Unis Badri{" "}
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Profile
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Change Password
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Log Out
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarCMS;
