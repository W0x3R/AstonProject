export const PostCard = ({ postData }) => {
	const { id, title } = postData
	return (
		<div>
			<p>{id}</p>
			<p>{title}</p>
		</div>
	)
}
