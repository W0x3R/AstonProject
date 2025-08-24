import { useParams } from "react-router"
import styles from "./TodosList.module.css"
import { Container } from "../../shared/ui/Container/Container"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { filterUserAlbums } from "../../features/filterUserAlbums/filterUserAlbums"

export const TodosList = ({ todosData = [] }) => {
	const { id } = useParams()
	const todosId = Number(id)
	const userTodos = filterUserAlbums(todosData, todosId)

	return (
		<section className={styles.section}>
			<Container>
				<BackButton position="center" />

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
