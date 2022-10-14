import React, {useEffect, useRef} from "react"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

const SideBar = ({expandState}: {expandState: boolean}) => {
	const sideBarRef = useRef<HTMLDivElement>(null)

	// All the links for the sidebar
	// TODO: Maybe change this to a JSON for easier modification?
	const navButtons = ["Projects", "About Me", "Backlog"]
	const navLinks = ["/projects", "/about", "/backlog"]
	const navIcons = ["construction", "person", "style"]

	// When the expand state has changed, add or remove the class that expands the side bar
	useEffect(() => {
		expandState ? sideBarRef.current?.classList.add("expanded") : sideBarRef.current?.classList.remove("expanded")
	}, [expandState])


	const generateSideBar = () => {
		return navButtons.map((page, index) => (
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

export default SideBar