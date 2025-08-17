import { Link, useLocation } from "react-router"
import styles from "./AlbumCard.module.css"

export const AlbumCard = ({ id, title }) => {
	const location = useLocation()
	return (
		<Link
			to={`/albums/${id}/photos`}
			className={styles.link}
			state={{ from: location.pathname }}
		>
			{title}
		</Link>
	)
}
