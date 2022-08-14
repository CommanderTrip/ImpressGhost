import {Link, NavLink} from 'react-router-dom';
import PropTypes from "prop-types";

/**
 * Creates the Navbar at the top of the screen
 * @param expandToggle  The button to expand the side bar exists here. We need access to change the expand state.
 * @return {JSX.Element}
 */
// @ts-ignore
const NavBar = ({expandToggle}): JSX.Element => {

    const navBtns = ["create account", "login"];    // The buttons that need to be created
    const navLinks = ["/signup", "/login"]; // The page navigation to take the user
    const navIcons = ["person_add_alt", "account_circle"]

    /**
     * The user account information is generated from this function
     * @return list of anchor tags
     */
    const generateTopNavButtons = () => {
        // the page is the name of the page from the array
        // the index is the incremented variable because the map and the index of the array are related
        return navBtns.map((page, index) => (
            <NavLink key={index} to={`${navLinks[index]}`} className={"page-link account-btn"}>
                <span className="material-icons">{`${navIcons[index]}`}</span>
                {page}
            </NavLink>
        ))
    }

    return (
        <div className={"top-nav"}>
            <div className={"top-nav-container navigation"}>

                {/* Site Title */}
                <div className={"site-title"}>
                    <span className="material-icons" style={{"cursor": "pointer"}} onClick={expandToggle}>menu</span>
                    <Link to={"/"}>Impress Ghost</Link>
                </div>

                {/* The Navigation for the user account login*/}
                <div className={"account-nav"}>
                    {generateTopNavButtons()}
                </div>

            </div>
        </div>
    )
}

NavBar.propTypes = {
    expandToggle: PropTypes.func.isRequired
}


export default NavBar;