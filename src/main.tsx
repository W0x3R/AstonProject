import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { App } from "./app/App"
import { store } from "./app/providers/store/store"
import "../src/app/styles/index.css"
import { Suspense } from "react"
import { SuspenseFallback } from "@shared/ui/SuspenseFallback/SuspenseFallback"

createRoot(document.getElementById("root")!).render(
	<Suspense fallback={<SuspenseFallback />}>
		<Provider store={store}>
			<App />
		</Provider>
	</Suspense>
)
