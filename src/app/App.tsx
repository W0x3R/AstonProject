import { useEffect, useState } from "react"
import { RouterProvider } from "react-router"
import { ThemeContext } from "@shared/lib/ThemeProvider"
import { GLOBAL_CLASSES } from "@shared/constants/globalClasses"
import { router } from "./providers/router/router"

export const App = () => {
	const [theme, setTheme] = useState(GLOBAL_CLASSES.light)

	const toggleTheme = () =>
		setTheme(
			theme === GLOBAL_CLASSES.light ?
				GLOBAL_CLASSES.dark
			:	GLOBAL_CLASSES.light
		)

	useEffect(() => {
		document.body.classList.remove(GLOBAL_CLASSES.light, GLOBAL_CLASSES.dark)
		document.body.classList.add(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<RouterProvider router={router}></RouterProvider>
		</ThemeContext.Provider>
	)
}
