import { useRef } from "react"
import { useParams } from "react-router"
import styles from "./PostPage.module.css"
import { PostCard } from "../../entities/post/ui/PostCard"
import { CommentList } from "../../widgets/CommentList/ui/CommentList"
import { Container } from "../../shared/ui/Container/Container"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { LoadingSpinner } from "../../shared/ui/LoadingSpinner/LoadingSpinner"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound"
import { useGetPostByIdQuery } from "../../entities/post/api/postsApi"
import { useSelector } from "react-redux"
import { selectPostById } from "../../entities/post/model/slice/postSlice"

export const PostPage = () => {
	const { id } = useParams()
	const postId = Number(id)
	const { data: postData = [], isLoading, error } = useGetPostByIdQuery(postId)

	const postFromSlice = useSelector((state) => selectPostById(state, postId))

	const sectionRef = useRef(null)
	const postWrapperRef = useRef(null)

	if (isLoading) {
		return <LoadingSpinner size="small" />
	}
	if (error) {
		return <DataNotFound>{error}</DataNotFound>
	}

	if (!postData && !postFromSlice) {
		return <p>Пост не найден</p>
	}

	return (
		<section className={styles.section} ref={sectionRef}>
			<Container>
				<h2 className={styles.title}>Пост пользователя №{postId}:</h2>
				<div ref={postWrapperRef} className={styles.post__wrapper}>
					<BackButton position="end" />
					<PostCard postData={postFromSlice || postData} />
					<CommentList postId={postId} />
				</div>
			</Container>
		</section>
	)
}
