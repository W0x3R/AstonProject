import styles from "./AlbumList.module.css"
import { AlbumCard } from "../../entities/albums/ui/AlbumCard"
import { Container } from "../../shared/ui/Container/Container"
import { useLocation } from "react-router"
	const location = useLocation()

export const AlbumList = ({ albumsData = [] }) => {
	return (
		<section>
			<Container>
				{!location.pathname.startsWith("/albums") && (
					<BackLink position="center" />
				)}
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Все альбомы:</h2>
					<ul className={styles.list}>
						{albumsData.map(({ id, title }) => {
							return (
								<li key={id} className={styles["list-item"]}>
									<AlbumCard key={id} title={title} id={id} />
								</li>
							)
						})}
					</ul>
				</div>
			</Container>
		</section>
	)
}
