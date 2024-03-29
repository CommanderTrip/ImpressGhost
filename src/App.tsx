import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./components/page/Layout"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import ProjectList from "./pages/ProjectList"
import React from "react"
import {useLocalStorage} from "usehooks-ts"

const App = () => {
	const [theme, setTheme] = useLocalStorage("theme", "dark")

	const switchTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<BrowserRouter>
			<Layout theme={theme}>
				<Routes>
					<Route path={"/"} element={<Home data-theme={theme} />}/>
					<Route path={"/about"} element={<AboutMe/>}/>
					<Route path={"/projects"} element={<ProjectList/>}/>
				</Routes>
				<div>
					<button onClick={switchTheme}>
						Switch to {theme === "light" ? "dark" : "light"}
					</button>
				</div>
			</Layout>
		</BrowserRouter>
	)
}

export default App