export type TPost = {
	userId: number
	id: number
	title: string
	body: string
}

export type TPostCardProps = { postData: Omit<TPost, "userId" | "id"> }
