import { useLocation } from "react-router"
import styles from "./AlbumList.module.css"
import { AlbumCard } from "../../../entities/albums/ui/AlbumCard"
import { Container } from "../../../shared/ui/Container/Container"
import { BackButton } from "../../../shared/ui/BackButton/BackButton"
import { DataNotFound } from "../../../shared/ui/DataNotFound/DataNotFound"

export const AlbumList = ({ albumsData, error, heading }) => {
	const location = useLocation()
	return (
		<section className={styles.section}>
			<Container>
				{!location.pathname.startsWith("/albums") && (
					<BackButton position="center" />
				)}
				{error && (
					<DataNotFound>
						Ошибка загрузки альбомов. Попробуйте повторить позже.
					</DataNotFound>
				)}
				{!error && albumsData.length === 0 && (
					<p className={styles["no-albums"]}>Альбомов пока нет.</p>
				)}

				{!error && albumsData.length > 0 && (
					<div className={styles.wrapper}>
						<h2 className={styles.title}>{heading}</h2>
						<ul className={styles.list}>
							{albumsData.map(({ id, title }) => {
								return (
									<li key={id} className={styles["list-item"]}>
										<AlbumCard title={title} id={id} />
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</Container>
		</section>
	)
}
