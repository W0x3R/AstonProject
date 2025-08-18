export const filterPostComments = (commentsData, postId) =>
	commentsData.filter((comment) => Number(comment.postId) === postId)
