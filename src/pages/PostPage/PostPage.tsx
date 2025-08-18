import { useEffect, useRef } from "react"
import { useParams } from "react-router"
import styles from "./PostPage.module.css"
import { PostCard } from "../../entities/post/ui/PostCard"
import { CommentList } from "../../widgets/CommentList/ui/CommentList"
import { Container } from "../../shared/ui/Container/Container"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { filterPostComments } from "../../features/filterPostComments/lib/filterPostComments"
import { commentsData } from "../../entities/post/model/commentsData"
import { usePosts } from "../../features/PostList/model/hooks/usePosts"
import { LoadingSpinner } from "../../shared/ui/LoadingSpinner/LoadingSpinner"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound"

export const PostPage = () => {
	const { id } = useParams()
	const postId = Number(id)
	const { post, isLoading, errorMessage } = usePosts(postId)
	console.log(errorMessage)

	const comments = filterPostComments(commentsData, postId)
	const sectionRef = useRef(null)
	const postWrapperRef = useRef(null)

	useEffect(() => {
		if (sectionRef.current && postWrapperRef.current) {
			const getWrapperHeight =
				postWrapperRef.current.getBoundingClientRect().height
			sectionRef.current.style.minHeight = `${getWrapperHeight + 10}px`
		}
	}, [comments])

	if (isLoading) {
		return <LoadingSpinner size="small" />
	}
	if (errorMessage) {
		return <DataNotFound>{errorMessage}</DataNotFound>
	}

	if (!post) {
		return <p>Пост не найден</p>
	}

	return (
		<section className={styles.section} ref={sectionRef}>
			<Container>
				<h2 className={styles.title}>Пост пользователя №{postId}:</h2>
				<div ref={postWrapperRef} className={styles.post__wrapper}>
					<BackButton position="end" />
					<PostCard postData={post} />
					<CommentList postComments={comments} />
				</div>
			</Container>
		</section>
	)
}
