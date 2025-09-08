export type TAlbum = {
	userId: number
	id: number
	title: string
}

export type TAlbumCardProps = Omit<TAlbum, "userId">
