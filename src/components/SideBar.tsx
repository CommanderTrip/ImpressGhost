import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

// @ts-ignore
const SideBar = ({expandState}) => {
    const sideBarRef = useRef(null);

    // All the links for the side bar
    const navBtns = ["Projects", "About Me", "Backlog"];
    const navLinks = ["/projects", "/about", "/backlog"];
    const navIcons = ["construction", "person", "style"]

    // When the expand state has changed, add or remove the class that expands the side bar
    useEffect(() => {
        // @ts-ignore
        expandState ? sideBarRef.current.classList.add("expanded") : sideBarRef.current.classList.remove("expanded");
    }, [expandState])


    const generateSideBar = () => {
        return navBtns.map((page, index) => (
            <div key={index} className={"page-link-space"}>
                <Link to={`${navLinks[index]}`}>
                    <div className={"page-link"}>
                        <span className="material-icons">{`${navIcons[index]}`}</span>
                        {page}
                    </div>
                </Link>
            </div>
        ))
    }

    const generateFooter = () => {
        return (
            <div className={"side-nav-footer"}>
                <p>I am the footer. Just some extra information and things and stuff<br/>&#128512;</p>
            </div>
        )
    }

    return (
        <div className={"side-nav"}>
            <div ref={sideBarRef} className={"side-nav-container navigation"}>
                <div className={"site-nav"}>
                    {generateSideBar()}
                </div>
                <div className={"filler"}/>
                {expandState ? generateFooter() : null}
            </div>

        </div>
    )
}

SideBar.propTypes = {
    expandState: PropTypes.bool.isRequired
}

export default SideBar;