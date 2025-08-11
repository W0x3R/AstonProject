export const MainLayout = ({ header, children, footer }) => {
	return (
		<>
			{header}
			<main>{children}</main>
			{footer}
		</>
	)
}
