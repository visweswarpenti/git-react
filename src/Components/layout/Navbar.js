import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <React.Fragment>
            <nav className="navbar bg-primary">
                <i className='' />
                {props.title}
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>

        </React.Fragment>

    )
}

Navbar.defaultProps = {
    title: 'Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default Navbar