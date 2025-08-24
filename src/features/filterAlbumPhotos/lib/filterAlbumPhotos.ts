export const filterAlbumPhotos = (photosData, albumId) => {
	return photosData.filter((photo) => Number(photo.albumId) === albumId)
}
