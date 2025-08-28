export const filterByLength = (postsData, minLength) =>
	postsData.filter((post) => post?.title.length >= minLength)
