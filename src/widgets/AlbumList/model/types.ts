import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { SerializedError } from "@reduxjs/toolkit"
import type { TAlbum } from "../../../entities/albums/model/types"

export type TAlbumListProps = {
	albumsData: TAlbum[]
	error?: FetchBaseQueryError | SerializedError
	heading: string
}
