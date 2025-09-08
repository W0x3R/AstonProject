import { Link } from "react-router"
import type { TAlbumCardProps } from "../model/types"
import styles from "./AlbumCard.module.css"

export const AlbumCard = ({ id, title }: TAlbumCardProps) => {
	return (
		<Link to={`/albums/${id}/photos`} className={styles.link}>
			{title}
		</Link>
	)
}
