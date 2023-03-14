import {ReactNode, useState} from "react"
import PropTypes from "prop-types"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import Content from "./Content"

// Props should be the switch in index.js. We want the page content to be the page that the switch matches to.
// TODO: can we pass just the page to Content without passing all children.

const Layout = (props: { children: ReactNode, theme: string, switchTheme: () => void}) => {

	const [expandState, setExpandState] = useState<boolean>(false)

	return (
		<div data-theme={props.theme}>
			<NavBar expandState={expandState} setExpandState={setExpandState} switchThemeState={props.switchTheme} />
			<div className="page-content" >
				<SideBar expandState={expandState}/>
				<Content page={props.children}/>
			</div>
		</div>
	)
}

Layout.propTypes = {
	props: PropTypes.element
}

export default Layout