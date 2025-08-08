import { MainLayout } from "../shared/layouts/MainLayout"
import { PostList } from "../widgets/PostList/PostList"
import { Header } from "../widgets/LayoutHeader/Header"
import { Footer } from "../widgets/LayoutFooter/Footer"
import { ThemeContext } from "../shared/lib/ThemeProvider"
import { useEffect, useState } from "react"

export const App = () => {
	const [theme, setTheme] = useState("light")

	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

	useEffect(() => {
		document.body.classList.remove("light", "dark")
		document.body.classList.add(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<MainLayout
				header={<Header />}
				footer={<Footer />}
				postList={<PostList />}
			/>
		</ThemeContext.Provider>
	)
}
