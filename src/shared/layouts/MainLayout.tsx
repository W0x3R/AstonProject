export const MainLayout = ({ header, postList, footer }) => {
	return (
		<>
			{header}
			<main>
				<div className="wrapper">
					<div className="container">{postList}</div>
				</div>
			</main>
			{footer}
		</>
	)
}
