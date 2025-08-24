export const filterByLength = (postsData, minLength) =>
	postsData.filter((data) => data.title.length >= minLength)
