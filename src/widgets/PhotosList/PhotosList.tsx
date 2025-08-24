import { useParams } from "react-router"
import { useMemo } from "react"
import styles from "./PhotosList.module.css"
import { filterAlbumPhotos } from "../../features/filterAlbumPhotos/lib/filterAlbumPhotos"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound"
import { PhotoCard } from "../../entities/photos/model/ui/PhotoCard"

export const PhotosList = ({ photosData }) => {
	const { id } = useParams()
	const albumId = Number(id)

	const albumPhotos = useMemo(
		() => filterAlbumPhotos(photosData, albumId),
		[albumId, photosData]
	)
	return (
		<section className={styles.section}>
			<BackButton position="center" />
			<h2 className={styles.title}>Фотографии альбома №{albumId}:</h2>
			{albumPhotos.length === 0 && (
				<DataNotFound>Похоже, что изображения не найдены.</DataNotFound>
			)}

			<ul className={styles.list}>
				{albumPhotos.map(({ id, title, url }) => {
					return (
						<li className={styles["list-item"]} key={id}>
							<PhotoCard src={url} title={title} />
						</li>
					)
				})}
			</ul>
		</section>
	)
}
