import React from "react"
import { PostCard } from "../../entities/post/ui/PostCard"
import { postsData } from "../../entities/post/model/postsData"
import { Container } from "../../shared/ui/Container.js"

export const PostList = () => {
	return (
		<section>
			<Container>
				{postsData.map((postData) => (
					<React.Fragment key={postData.id}>
						<PostCard postData={postData} />
					</React.Fragment>
				))}
			</Container>
		</section>
	)
}
