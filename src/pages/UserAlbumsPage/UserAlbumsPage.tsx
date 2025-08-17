import { useParams } from "react-router"
import { AlbumList } from "../../widgets/AlbumList/AlbumList"
import { albumsData } from "../../entities/albums/model/albumsData"

export const UserAlbumsPage = () => {
	const { id } = useParams()
	const userAlbumsId = Number(id)
	const userAlbums = albumsData.filter((album) => album.userId === userAlbumsId)

	return (
		<AlbumList
			albumsData={userAlbums}
			title={`Альбомы пользователя №${userAlbumsId}`}
		/>
	)
}
