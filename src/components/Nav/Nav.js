import React from 'react'
import {NavHashLink as Link} from "react-router-hash-link"

const Nav = () => {
    return (
        <div className="Nav">
            <h3>Logo</h3>
            <div className="hamburger">OOO</div>
            <ul className="navlinks">
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
