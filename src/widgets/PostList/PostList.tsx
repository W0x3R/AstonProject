import { PostCard } from "../../entities/post/ui/PostCard"
import { GLOBAL_CLASSES } from "../../app/styles/globalClasses.js"
import { commentsData } from "../../entities/post/model/commentsData.js"
import { CommentList } from "../CommentList/CommentList.js"
import styles from "./PostList.module.css"

export const PostList = ({ postsData = [] }) => {
	return (
		<section>
			<div className={GLOBAL_CLASSES.container}>
				{postsData.map((postData) => {
					const postComments = commentsData.filter(
						(comment) => comment.id === postData.id
					)
					return (
						<div className={styles.post__wrapper} key={postData.id}>
							<PostCard postData={postData} />
							<CommentList postComments={postComments} />
						</div>
					)
				})}
			</div>
		</section>
	)
}
