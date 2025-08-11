import { useEffect, useState } from "react"
import { MainLayout } from "../shared/layouts/MainLayout"
import { PostList } from "../widgets/PostList/PostList"
import { Header } from "../widgets/LayoutHeader/Header"
import { Footer } from "../widgets/LayoutFooter/Footer"
import { ThemeContext } from "../shared/lib/ThemeProvider"
import { GLOBAL_CLASSES } from "../shared/constants/globalClasses"

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
			<MainLayout header={<Header />} footer={<Footer />}>
				<PostList />
			</MainLayout>
		</ThemeContext.Provider>
	)
}
