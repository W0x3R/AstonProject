export const filterUserAlbums = (albumsData, userAlbumsId) =>
	albumsData.filter((album) => Number(album.userId) === userAlbumsId)
