export const MainLayout = ({ header, postList, footer }) => {
	return (
		<div>
			{header}
			<main>{postList}</main>
			{footer}
		</div>
	)
}
