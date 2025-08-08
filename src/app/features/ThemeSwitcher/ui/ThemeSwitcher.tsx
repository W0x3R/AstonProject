import styles from "./ThemeSwitcher.module.css"
import { useContext } from "react"
import { ThemeContext } from "../../../../shared/lib/ThemeProvider"
import DarkThemeIcon from "../../../../shared/assets/images/dark-theme-icon.svg?react"
import LightThemeIcon from "../../../../shared/assets/images/light-theme-icon.svg?react"

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<button className={styles["toggle__theme-btn"]} onClick={toggleTheme}>
			<DarkThemeIcon
				className={`${styles["dark__theme-icon"]} ${theme === "dark" ? styles.active : ""}`}
				width={30}
				height={30}
			/>

			<LightThemeIcon
				className={`${styles["light__theme-icon"]} ${theme === "light" ? styles.active : ""}`}
				width={30}
				height={30}
			/>
		</button>
	)
}
