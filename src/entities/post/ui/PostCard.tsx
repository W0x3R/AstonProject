import styles from "./PostCard.module.css"

export const PostCard = ({ postData }) => {
	const { title, body } = postData
	return (
		<div className={styles.postcard}>
			<p className={styles.title}>{title}</p>
			<p className={styles.body}>{body}</p>
		</div>
	)
}
