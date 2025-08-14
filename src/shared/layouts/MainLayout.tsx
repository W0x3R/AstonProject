import { Outlet } from "react-router"

export const MainLayout = ({ header, footer }) => {
	return (
		<>
			{header}
			<main>
				<Outlet />
			</main>
			{footer}
		</>
	)
}
