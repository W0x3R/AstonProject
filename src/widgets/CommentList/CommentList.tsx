import { useState } from "react"
import { Button } from "../../shared/ui/Button/Button"

export const CommentList = ({ postComments = [] }) => {
	const [expandedComments, setExpandedComments] = useState([])

	const toggleComment = (commentId) => {
		setExpandedComments((prev) =>
			prev.includes(commentId) ?
				prev.filter((id) => id !== commentId)
			:	[...prev, commentId]
		)
	}

	if (postComments.length === 0) return <p>Нет комментариев</p>

	return (
		<div>
			{postComments.map(({ id, name, email, body }) => {
				const isExpanded = expandedComments.includes(id)
				return (
					<div key={id}>
						<Button onClick={() => toggleComment(id)}>
							{isExpanded ? "Показать" : "Скрыть"}
						</Button>
						<div
							style={{
								maxHeight: isExpanded ? 0 : 600,
								opacity: isExpanded ? 0 : 1,
								overflow: "hidden",
								transition: "all 0.3s linear",
							}}
						>
							<h3>{name}</h3>
							<h3>{email}</h3>
							<p>{body}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}
