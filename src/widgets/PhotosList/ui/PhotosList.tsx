import { useParams } from "react-router"
import styles from "./PhotosList.module.css"
import { BackButton } from "../../../shared/ui/BackButton/BackButton"
import { DataNotFound } from "../../../shared/ui/DataNotFound/DataNotFound"
import { PhotoCard } from "../../../entities/photos/ui/PhotoCard"
import { Container } from "../../../shared/ui/Container/Container"

export const PhotosList = ({ photosData, error }) => {
	const { id } = useParams()
	const albumId = Number(id)
	return (
		<section className={styles.section}>
			<Container>
				<BackButton position="center" />
				{error && (
					<DataNotFound>
						Ошибка загрузки фотографий. Попробуйте повторить позже.
					</DataNotFound>
				)}
				{!error && photosData.length === 0 && (
					<>
						<p className={styles["no-photos"]}>Фотографий пока нет.</p>
					</>
				)}
				{!error && photosData.length > 0 && (
					<>
						<h2 className={styles.title}>Фотографии альбома №{albumId}:</h2>
						{photosData.length === 0 && (
							<DataNotFound>Похоже, что изображения не найдены.</DataNotFound>
						)}
						<ul className={styles.list}>
							{photosData.map(({ id, title, url }) => {
								return (
									<li className={styles["list-item"]} key={id}>
										<PhotoCard src={url} title={title} />
									</li>
								)
							})}
						</ul>
					</>
				)}
			</Container>
		</section>
	)
}
