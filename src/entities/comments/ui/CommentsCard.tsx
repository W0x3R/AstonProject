import type { TCommentProps } from "../model/types"
import styles from "./CommentsCard.module.css"

export const CommentsCard = ({ name, email, body }: TCommentProps) => {
	return (
		<div className={styles.comment}>
			<h2 className={styles.title}>{name}</h2>
			<h3 className={styles.email}>{email}</h3>
			<p className={styles.body}>{body}</p>
		</div>
	)
}
