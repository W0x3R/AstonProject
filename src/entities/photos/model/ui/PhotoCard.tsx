import styles from "./PhotoCard.module.css"

export const PhotoCard = ({ src, title }) => {
	return (
		<figure className={styles.figure}>
			<figcaption className={styles.title}>{title}</figcaption>
			<img src={src} alt={title} width={640} height={480} loading="lazy" />
		</figure>
	)
}
