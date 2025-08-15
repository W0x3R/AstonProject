import styles from "./AlbumPhotosPage.module.css"
import { useParams } from "react-router"
import { photosData } from "../../entities/photos/model/photosData"
import React from "react"
import { NavigateLink } from "../../shared/ui/NavigateLink/NavigateLink"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound"

export const AlbumPhotosPage = () => {
	const { id } = useParams()
	const albumId = Number(id)
	const albumPhotos = photosData.filter((photo) => photo.albumId === albumId)

	return (
		<section className={styles.section}>
			<NavigateLink text="Вернуться назад" url={"/albums"} />
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
