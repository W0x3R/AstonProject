import styles from "./PostCard.module.css"

export const PostCard = ({ postData }) => {
	const { title, body } = postData
	console.log(body)
	return (
		<div className={styles.postcard}>
			<p className={styles.postcard__title}>{title}</p>
			<p className={styles.postcard__body}>{body}</p>
		</div>
	)
}
