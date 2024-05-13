import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../App.css"


const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/fe/33/c0/fe33c096-3353-d738-aa79-f45c2da63a8c/pr_source.jpg/512x512bb.jpg" style={{ borderRadius: "50%" }} width="100" height="100" className="d-inline-block align-top" alt="image path not found" />
                    </NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/start_game">Game Start</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/game_dashboard">Game Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/user_leadtherboard">User Score Leatherboard</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </>
    )
}



export default Navbar;