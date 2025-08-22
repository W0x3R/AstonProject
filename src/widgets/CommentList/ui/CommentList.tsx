import { useCallback, useState, useRef, useEffect } from "react"
import styles from "./CommentList.module.css"
import { Button } from "../../../shared/ui/Button/Button"
import { useGetCommentsByPostIdQuery } from "../../../entities/comments/api/commentsApi"
import { LoadingSpinner } from "../../../shared/ui/LoadingSpinner/LoadingSpinner"

export const CommentList = ({ postId }) => {
	const [expanded, setExpanded] = useState(false)
	const contentRef = useRef(null)
	const [maxHeight, setMaxHeight] = useState("0px")

	const {
		data: commentsByPostId = [],
		isLoading,
		error,
	} = useGetCommentsByPostIdQuery(postId, { skip: !expanded })

	const toggleComments = useCallback(() => setExpanded((prev) => !prev), [])

	useEffect(() => {
		if (expanded && contentRef.current) {
			setMaxHeight(`${contentRef.current.scrollHeight}px`)
		} else {
			setMaxHeight("0px")
		}
	}, [expanded, commentsByPostId])

	if (error)
		return <p className={styles["no-comments"]}>Комментарии отсутствуют</p>

	if (isLoading) {
		return <LoadingSpinner size="small" />
	}

	return (
		<div>
			<Button className={styles["toggle-comment-btn"]} onClick={toggleComments}>
				{expanded ? "Свернуть комментарии" : "Показать комментарии"}
			</Button>
			<div
				ref={contentRef}
				className={`${styles["comment-wrapper"]} ${expanded ? styles.open : ""}`}
				style={{ maxHeight }}
			>
				{commentsByPostId.map(({ id, name, email, body }) => (
					<div className={styles.comment} key={id}>
						<h2 className={styles.title}>{name}</h2>
						<h3 className={styles.email}>{email}</h3>
						<p className={styles.body}>{body}</p>
					</div>
				))}
			</div>
		</div>
	)
}
