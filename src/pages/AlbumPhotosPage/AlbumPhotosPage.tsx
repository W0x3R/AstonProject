import { useParams } from "react-router"
import { withLoading } from "@shared/lib/hoc/withLoading"
import { PhotosList } from "@widgets/PhotosList/ui/PhotosList"
import { useGetPhotosByAlbumIdQuery } from "@entities/photos/api/photosApi"

const PhotosListWithLoading = withLoading(PhotosList)

const AlbumPhotosPage = () => {
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

export default AlbumPhotosPage
