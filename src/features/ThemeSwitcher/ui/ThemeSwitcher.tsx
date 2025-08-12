import styles from "./ThemeSwitcher.module.css"
import { useContext } from "react"
import { GLOBAL_CLASSES } from "../../../shared/constants/globalClasses"
import DarkThemeIcon from "../../../shared/assets/images/dark-theme-icon.svg?react"
import LightThemeIcon from "../../../shared/assets/images/light-theme-icon.svg?react"
import { ThemeContext } from "../../../shared/lib/ThemeProvider"

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<button className={styles["toggle__theme-btn"]} onClick={toggleTheme}>
			<DarkThemeIcon
				className={`${styles["dark-theme-icon"]} ${theme === GLOBAL_CLASSES.light ? styles.active : ""}`}
				width={30}
				height={30}
			/>

			<LightThemeIcon
				className={`${styles["light-theme-icon"]} ${theme === GLOBAL_CLASSES.dark ? styles.active : ""}`}
				width={30}
				height={30}
			/>
		</button>
	)
}
