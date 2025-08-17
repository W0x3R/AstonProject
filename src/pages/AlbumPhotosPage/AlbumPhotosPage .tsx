import styles from "./AlbumPhotosPage.module.css"
import { useParams } from "react-router"
import { photosData } from "../../entities/photos/model/photosData"
import React from "react"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound"
import { BackLink } from "../../shared/ui/BackLink/BackLink"

export const AlbumPhotosPage = () => {
	const { id } = useParams()
	const albumId = Number(id)
	const albumPhotos = photosData.filter((photo) => photo.albumId === albumId)

	return (
		<section className={styles.section}>
			<BackLink position="center" />
			{albumPhotos.length === 0 && (
				<DataNotFound>Похоже, что изображения не найдены.</DataNotFound>
			)}
			<ul className={styles.list}>
				{albumPhotos.map(({ id, title, url }) => {
					return (
						<React.Fragment key={id}>
							<li className={styles["list-item"]}>
								<img src={url} alt={title} />
							</li>
						</React.Fragment>
					)
				})}
			</ul>
		</section>
	)
}
