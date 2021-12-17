import React, { useContext } from "react";
import Menu from "./images/bars-solid.svg";
import Close from "./images/times-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import './css/Header.css';
import { auth } from './config/Config';
import { UserContext } from './context/UserContext'

const Navbar = () => {

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                navigate('/');
            })
    }

    return(
        <>
            <header>
                <div className="menu">
                    <img src={Menu} alt="" width="20" />
                </div>
                <div className="logo text-gray-800 sm:text-sm lg:text-2xl md:text-xl font-bold">
                    <h1><Link to="">Get Your Location</Link></h1>
                </div>
                {!user && 
                    <>
                        <nav>
                            <ul className="toggle">
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/">Login</Link></li>
                            </ul>
                        </nav>
                    </>
                }
                {user && 
                    <>
                        <nav>
                            <ul className="toggle">
                                <li><Link to="/dashboard">Dashboard</Link></li>
                            </ul>
                            <div className="nav-cart" onClick={handleLogout}>
                                LOGOUT
                            </div>
                        </nav>
                    </>
                }
            </header>
        </>
        )
}

export default Navbar;