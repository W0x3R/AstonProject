export const MainLayout = ({ header, postList, footer }) => {
	return (
		<>
			{header}
			<main>{postList}</main>
			{footer}
		</>
	)
}
