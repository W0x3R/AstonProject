import { useParams } from "react-router"
import { Container } from "../../shared/ui/Container/Container"
import styles from "./TodosList.module.css"
import { BackLink } from "../../shared/ui/BackLink/BackLink"

export const TodosList = ({ todosData = [] }) => {
	const { id } = useParams()
	const todosId = Number(id)
	const userTodos = todosData.filter((todo) => todo.userId === todosId)

	return (
		<section className={styles.section}>
			<Container>
				<BackLink position="center" />

				<div className={styles["todos-wrapper"]}>
					<h2
						className={styles.title}
					>{`Список дел пользователя №${todosId}:`}</h2>
					{userTodos.map(({ id, title, completed }) => {
						return (
							<div key={id} className={styles["todo-wrapper"]}>
								<h3 className={styles["todo-title"]}>{title}</h3>
								<p className={styles["todo-completed"]}>
									{completed ? "Выполнено" : "Не выполнено"}
								</p>
							</div>
						)
					})}
				</div>
			</Container>
		</section>
	)
}
