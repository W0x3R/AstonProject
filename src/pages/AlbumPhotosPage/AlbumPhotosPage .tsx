import { withLoading } from "../../shared/lib/hoc/withLoading"
import { PhotosList } from "../../widgets/PhotosList/PhotosList"
import { useGetPhotosByAlbumIdQuery } from "../../entities/photos/api/photosApi"
import { useParams } from "react-router"

const PhotosListWithLoading = withLoading(PhotosList)

export const AlbumPhotosPage = () => {
	const { id } = useParams()
	const albumId = Number(id)
	const {
		data: photosData = [],
		isLoading,
		error,
	} = useGetPhotosByAlbumIdQuery(albumId)

	return (
		<PhotosListWithLoading
			photosData={photosData}
			isLoading={isLoading}
			error={error}
		/>
	)
}
