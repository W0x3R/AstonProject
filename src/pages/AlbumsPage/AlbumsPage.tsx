import { useEffect, useState } from "react"
import { albumsData } from "../../entities/albums/model/albumsData"
import { withLoading } from "../../shared/lib/hoc/withLoading"
import { AlbumList as OriginalAlbumList } from "../../widgets/AlbumList/AlbumList"

const AlbumListWithLoading = withLoading(OriginalAlbumList)

export const AlbumsPage = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setData(albumsData)
			setIsLoading(false)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return (
		<AlbumListWithLoading
			isLoading={isLoading}
			albumsData={data}
			title="Все альбомы:"
		/>
	)
}
