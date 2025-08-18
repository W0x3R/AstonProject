import { useParams } from "react-router"
import { AlbumList } from "../../widgets/AlbumList/AlbumList"
import { albumsData } from "../../entities/albums/model/albumsData"
import { filterUserAlbums } from "../../features/filterUserAlbums/filterUserAlbums"

export const UserAlbumsPage = () => {
	const { id } = useParams()
	const userAlbumsId = Number(id)
	const userAlbums = filterUserAlbums(albumsData, userAlbumsId)

	return (
		<AlbumList
			albumsData={userAlbums}
			title={`Альбомы пользователя №${userAlbumsId}`}
		/>
	)
}
