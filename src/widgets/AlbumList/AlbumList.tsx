import styles from "./AlbumList.module.css"
import { AlbumCard } from "../../entities/albums/ui/AlbumCard"
import { Container } from "../../shared/ui/Container/Container"
import { useLocation } from "react-router"
import { BackLink } from "../../shared/ui/BackLink/BackLink"

export const AlbumList = ({ albumsData = [], title }) => {
	const location = useLocation()

	return (
		<section>
			<Container>
				{!location.pathname.startsWith("/albums") && (
					<BackLink position="center" />
				)}
				<div className={styles.wrapper}>
					<h2 className={styles.title}>{title}</h2>
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
