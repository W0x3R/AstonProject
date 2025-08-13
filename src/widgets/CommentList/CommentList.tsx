import { useCallback, useState } from "react"
import styles from "./CommentList.module.css"
import { Button } from "../../shared/ui/Button/Button"

export const CommentList = ({ postComments = [] }) => {
	const [expandedComments, setExpandedComments] = useState([])
	if (postComments.length === 0)
		return <p className={styles["no-comments"]}>Комментарии отсутствуют</p>

	const postId = postComments[0].postId
	const isExpanded = expandedComments.includes(postId)

	const toggleComment = useCallback((commentPostId) => {
		setExpandedComments((prev) =>
			prev.includes(commentPostId) ?
				prev.filter((postId) => postId !== commentPostId)
			:	[...prev, commentPostId]
		)
	}, [])

	return (
		<div>
			<Button
				className={styles["toggle-comment-btn"]}
				onClick={() => toggleComment(postId)}
			>
				{isExpanded ?
					`Показать комментарии (${postComments.length})`
				:	"Свернуть комментарии"}
			</Button>
			{postComments.map(({ id, name, email, body }) => {
				return (
					<div
						className={`${styles["comment-wrapper"]} ${isExpanded ? styles.collapsed : ""}`}
						key={id}
					>
						<h2 className={styles.title}>{name}</h2>
						<h3 className={styles.email}>{email}</h3>
						<p className={styles.body}>{body}</p>
					</div>
				)
			})}
		</div>
	)
}
