import styles from "./PhotoCard.module.css"

export const PhotoCard = ({ src, title }) => {
	return (
		<figure className={styles.figure}>
			<figcaption className={styles.title}>{title}</figcaption>
			{/* src оставил пустым, так как серверис по получению фото не работает и падает куча ошибок при загрузке  */}
			<img src={" "} alt={title} width={640} height={480} loading="lazy" />
		</figure>
	)
}
