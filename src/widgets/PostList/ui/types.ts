import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { TPost } from "../../../entities/post/model/types"
import type { SerializedError } from "@reduxjs/toolkit"

export type TPostListProps = {
	postsData: TPost[]
	error?: FetchBaseQueryError | SerializedError
	heading: string
}
