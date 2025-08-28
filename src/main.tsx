import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { App } from "./app/App"
import { store } from "./app/providers/store/store"
import "../src/app/styles/index.css"

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<App />
	</Provider>
)
