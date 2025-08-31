import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { TPhoto } from "@entities/photos/model/types"
import type { SerializedError } from "@reduxjs/toolkit"

export type TPhotosListProps = {
	photosData: TPhoto[]
	error?: FetchBaseQueryError | SerializedError
}
