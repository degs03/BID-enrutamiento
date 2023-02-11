import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/4">4</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hello">Hello</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu