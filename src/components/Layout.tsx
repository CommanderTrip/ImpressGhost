import {useState} from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Content from "./Content";

// Props should be the switch in App.js. We want the page content to be the page that the switch matches to.
// TODO: can we pass just the page to Content without passing all children.

// @ts-ignore
const Layout = (props) => {

    const [expandState, setExpandState] = useState(false);

    const expandToggle = () => {
        setExpandState(!expandState);
    }

    return (
        <>
            <NavBar expandToggle={expandToggle}/>
            <div className="page-content">
                <SideBar expandState={expandState}/>
                <Content page={props.children}/>
            </div>
        </>
    )
}

Layout.propTypes = {}

export default Layout;