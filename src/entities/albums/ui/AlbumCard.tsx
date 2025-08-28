import { Link } from "react-router"
import styles from "./AlbumCard.module.css"

export const AlbumCard = ({ id, title }) => {
	return (
		<Link to={`/albums/${id}/photos`} className={styles.link}>
			{title}
		</Link>
	)
}
