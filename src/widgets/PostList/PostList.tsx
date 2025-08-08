import React from "react"
import { PostCard } from "../../entities/post/ui/PostCard"
import { postsData } from "../../entities/post/model/postsData"
import { GLOBAL_CLASSES } from "../../app/styles/globalClasses.js"

export const PostList = () => {
	return (
		<section>
			<div className={GLOBAL_CLASSES.container}>
				{postsData.map((postData) => (
					<React.Fragment key={postData.id}>
						<PostCard postData={postData} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}
