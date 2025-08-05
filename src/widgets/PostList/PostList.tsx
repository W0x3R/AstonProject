import { PostCard } from "../../entities/post/ui/PostCard"
import { postsData } from "../../entities/post/model/postsData"

export const PostList = () => {
	return (
		<div>
			{postsData.map((postData) => (
				<PostCard key={postData.id} postData={postData} />
			))}
		</div>
	)
}
