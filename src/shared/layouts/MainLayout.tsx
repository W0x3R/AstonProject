import { Outlet } from "react-router"
import type { TMainLayoutProps } from "./types"

export const MainLayout = ({ header, footer }: TMainLayoutProps) => {
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
