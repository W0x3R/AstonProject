import { withLoading } from "../../shared/lib/hoc/withLoading"
import { AlbumList as OriginalAlbumList } from "../../widgets/AlbumList/AlbumList"
import { useGetAlbumsQuery } from "../../entities/albums/api/albumsApi"

const AlbumListWithLoading = withLoading(OriginalAlbumList)

export const AlbumsPage = () => {
	const { data: albumsData = [], isLoading, error } = useGetAlbumsQuery()

	return (
		<AlbumListWithLoading
			albumsData={albumsData}
			heading="Все альбомы:"
			isLoading={isLoading}
			error={error}
		/>
	)
}
