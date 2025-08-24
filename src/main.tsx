import { createRoot } from "react-dom/client"
import { App } from "./app/App"
import "../src/app/styles/index.css"

createRoot(document.getElementById("root")!).render(<App />)
