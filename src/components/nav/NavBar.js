import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link className="navbar__link" to="/availablespots">All Spots</Link>
            </li >
            <li className="navbar__item">
                <Link className="navbar__link" to="/listings">Listings</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/bookings">Bookings</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/createspot">Create Spot</Link>
            </li>
            {
                (localStorage.getItem("pts_token") !== null) ?
                    <li className="nav-item">
                        <button type="button" class="btn btn-primary btn-sm"
                            onClick={() => {
                                localStorage.removeItem("pts_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
            </nav>
            )
}
