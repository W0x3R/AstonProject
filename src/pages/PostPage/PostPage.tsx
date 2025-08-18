import styles from "./PostPage.module.css"
import { useParams } from "react-router"
import { postsData } from "../../entities/post/model/postsData"
import { commentsData } from "../../entities/post/model/commentsData"
import { PostCard } from "../../entities/post/ui/PostCard"
import { CommentList } from "../../widgets/CommentList/ui/CommentList"
import { Container } from "../../shared/ui/Container/Container"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { filterPostComments } from "../../features/filterPostComments/lib/filterPostComments"

export const PostPage = () => {
	const { id } = useParams()
	const postId = Number(id)

	const post = postsData.find((post) => post.id === postId)
	const comments = filterPostComments(commentsData, postId)
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
				<h2 className={styles.title}>{`Пост пользователя №${postId}:`}</h2>

				<div ref={postWrapperRef} className={styles.post__wrapper}>
					<BackButton position="end" />
					<PostCard postData={post} />
					<CommentList postComments={comments} />
				</div>
			</Container>
		</section>
	)
}
