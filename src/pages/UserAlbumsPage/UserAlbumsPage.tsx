import { useParams } from "react-router"
import { AlbumList as OriginalAlbumList } from "@widgets/AlbumList/ui/AlbumList"
import { useGetAlbumsByUserIdQuery } from "@entities/albums/api/albumsApi"
import { withLoading } from "@shared/lib/hoc/withLoading"

const UserAlbumsPageLoading = withLoading(OriginalAlbumList)

const UserAlbumsPage = () => {
	const { id } = useParams()
	const userId = Number(id)

	const {
		data: albumsData = [],
		isLoading,
		error,
	} = useGetAlbumsByUserIdQuery(userId)

	return (
		<UserAlbumsPageLoading
			albumsData={albumsData}
			heading={`Альбомы пользователя №${userId}`}
			isLoading={isLoading}
			error={error}
		/>
	)
}

export default UserAlbumsPage
