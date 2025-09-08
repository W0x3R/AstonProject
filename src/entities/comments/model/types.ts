export type TComment = {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

export type TCommentProps = Pick<TComment, "name" | "email" | "body">
