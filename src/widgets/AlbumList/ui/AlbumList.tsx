import { useLocation } from "react-router"
import type { TAlbumListProps } from "../model/types"
import type { TAlbum } from "@entities/albums/model/types"
import { ItemList } from "@shared/ui/ItemList/ItemList"
import styles from "./AlbumList.module.css"
import { AlbumCard } from "@entities/albums/ui/AlbumCard"
import { Container } from "@shared/ui/Container/Container"
import { BackButton } from "@shared/ui/BackButton/BackButton"
import { DataNotFound } from "@shared/ui/DataNotFound/DataNotFound"

export const AlbumList = ({ albumsData, error, heading }: TAlbumListProps) => {
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
							<ItemList<TAlbum>
								items={albumsData}
								renderItem={(albumData) => {
									return (
										<li key={albumData.id} className={styles["list-item"]}>
											<AlbumCard title={albumData.title} id={albumData.id} />
										</li>
									)
								}}
							/>
						</ul>
					</div>
				)}
			</Container>
		</section>
	)
}
