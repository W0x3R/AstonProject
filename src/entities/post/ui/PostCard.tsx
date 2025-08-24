import styles from "./PostCard.module.css"

export const PostCard = ({ postData }) => {
	const { title, body } = postData
	return (
		<div className={styles.postcard}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.body}>{body}</p>
		</div>
	)
}
