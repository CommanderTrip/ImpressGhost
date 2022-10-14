import {ReactNode, useState} from "react"
import PropTypes from "prop-types"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import Content from "./Content"

// Props should be the switch in App.js. We want the page content to be the page that the switch matches to.
// TODO: can we pass just the page to Content without passing all children.

const Layout = (props: { children: ReactNode }) => {

	const [expandState, setExpandState] = useState<boolean>(false)

	return (
		<>
			<NavBar expandState={expandState} setExpandState={setExpandState} />
			<div className="page-content">
				<SideBar expandState={expandState}/>
				<Content page={props.children}/>
			</div>
		</>
	)
}

Layout.propTypes = {
	props: PropTypes.element
}

export default Layout