import { PostCard } from "../../entities/post/ui/PostCard"
import { postsData } from "../../entities/post/model/postsData"
import { Container } from "../../shared/ui/Container"

export const PostList = () => {
	return (
		<Container>
			{postsData.map((postData) => (
				<PostCard key={postData.id} postData={postData} />
			))}
		</Container>
	)
}
