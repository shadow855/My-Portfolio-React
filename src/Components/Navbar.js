import React from 'react'
import { Link } from "react-router-dom";
import '../Css Folder/navbar.css';
import avatar from '../Images/icons8-avatar.gif';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white d-flex align-items-center" to='/home'>
                        <img src={avatar} alt="Logo" width="40" height="40"
                            className="d-inline-block align-text-top circular-img mx-2" />
                        <span className="ms-2 d-flex flex-column justify-content-center">Shadow</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-item-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" style={{ color: 'white', textDecoration: 'none' }} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" style={{ color: 'white', textDecoration: 'none' }} aria-current="page" to="/qualifications">Qualifications</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" style={{ color: 'white', textDecoration: 'none' }} aria-current="page" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" style={{ color: 'white', textDecoration: 'none' }} aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
