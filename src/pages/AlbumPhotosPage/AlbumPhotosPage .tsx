import { useEffect, useState } from "react"
import { withLoading } from "../../shared/lib/hoc/withLoading"
import { PhotosList } from "../../widgets/PhotosList/PhotosList"
import { photosData } from "../../entities/photos/model/photosData"

const PhotosListWithLoading = withLoading(PhotosList)

export const AlbumPhotosPage = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setData(photosData)
			setIsLoading(false)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return <PhotosListWithLoading photosData={data} isLoading={isLoading} />
}
