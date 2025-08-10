import { useEffect, useState } from "react"
import { MainLayout } from "../shared/layouts/MainLayout"
import { Header } from "../widgets/LayoutHeader/Header"
import { Footer } from "../widgets/LayoutFooter/Footer"
import { ThemeContext } from "../shared/lib/ThemeProvider"
import { PostsPage } from "../pages/PostsPage/PostsPage"

export const App = () => {
	const [theme, setTheme] = useState("light")

	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

	useEffect(() => {
		document.body.classList.remove("light", "dark")
		document.body.classList.add(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<MainLayout header={<Header />} footer={<Footer />}>
				<PostsPage />
			</MainLayout>
		</ThemeContext.Provider>
	)
}
