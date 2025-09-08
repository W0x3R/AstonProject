import type { TPost } from "@entities/post/model/types"

export type TFilterByLength = (postsData: TPost[], minLength: number) => TPost[]
