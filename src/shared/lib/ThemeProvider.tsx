import { createContext } from "react"
import { GLOBAL_CLASSES } from "../constants/globalClasses"

export const ThemeContext = createContext({
	theme: GLOBAL_CLASSES.light,
	toggleTheme: () => {},
})
