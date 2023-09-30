import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import WCVersion from "./WCVersion.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<WCVersion />
	</React.StrictMode>
)
