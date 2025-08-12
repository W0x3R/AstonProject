import { PostCard } from "../../entities/post/ui/PostCard"
import { commentsData } from "../../entities/post/model/commentsData.js"
import { CommentList } from "../CommentList/CommentList.js"
import styles from "./PostList.module.css"
import { Container } from "../../shared/ui/Container/Container"

export const PostList = ({ postsData = [] }) => {
	return (
		<section>
			<Container>
				{postsData.map((postData) => {
					const postComments = commentsData.filter(
						(comment) => comment.postId === postData.id
					)
					return (
						<div className={styles.post__wrapper} key={postData.id}>
							<PostCard postData={postData} />
							<CommentList postComments={postComments} />
						</div>
					)
				})}
			</Container>
		</section>
	)
}
