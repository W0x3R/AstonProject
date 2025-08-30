import type { TFilterByLength } from "./types"

export const filterByLength: TFilterByLength = (postsData, minLength) =>
	postsData.filter((post) => post?.title.length >= Number(minLength))
