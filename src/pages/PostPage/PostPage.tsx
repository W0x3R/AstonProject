import styles from "./PostPage.module.css"
import { useParams } from "react-router"
import { postsData } from "../../entities/post/model/postsData"
import { commentsData } from "../../entities/post/model/commentsData"
import { PostCard } from "../../entities/post/ui/PostCard"
import { CommentList } from "../../widgets/CommentList/ui/CommentList"
import { Container } from "../../shared/ui/Container/Container"
import { useEffect, useRef } from "react"
import { BackLink } from "../../shared/ui/BackLink/BackLink"

export const PostPage = () => {
	const { id } = useParams()
	const postId = Number(id)
	const post = postsData.find((post) => post.id === postId)
	const comments = commentsData.filter((comment) => comment.postId === postId)
	const sectionRef = useRef(null)
	const postWrapperRef = useRef(null)

	useEffect(() => {
		const getWrapperHeight =
			postWrapperRef.current.getBoundingClientRect().height
		sectionRef.current.style.minHeight = `${getWrapperHeight + 10}px`
	}, [])

	return (
		<section ref={sectionRef}>
			<Container>
				<div ref={postWrapperRef} className={styles.post__wrapper}>
					<BackLink position="end" />
					<PostCard postData={post} />
					<CommentList postComments={comments} />
				</div>
			</Container>
		</section>
	)
}
