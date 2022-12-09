import React from 'react'
import {createRoot} from "react-dom/client"
import "./style.css"

import {
	Navbar
} from "./components/index.js"

const App = () => {
	return <>
		<Navbar />
	</>
}

const app = document.querySelector("#app")
const root = createRoot(app)
root.render(<App />)