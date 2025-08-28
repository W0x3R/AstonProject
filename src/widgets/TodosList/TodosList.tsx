import styles from "./TodosList.module.css"
import { Container } from "../../shared/ui/Container/Container"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound"

export const TodosList = ({ todosData, error, userId }) => {
	return (
		<section className={styles.section}>
			<Container>
				{error && (
					<>
						<BackButton position="center" />
						<DataNotFound>
							Ошибка загрузки списка дел. Попробуйте повторить позже.
						</DataNotFound>
					</>
				)}
				{!error && todosData.length === 0 && (
					<>
						<BackButton position="center" />
						<p className={styles["no-todos"]}>Списка дел пока нет.</p>
					</>
				)}
				{!error && todosData.length > 0 && (
					<>
						<BackButton position="center" />
						<div className={styles["todos-wrapper"]}>
							<h2
								className={styles.title}
							>{`Список дел пользователя №${userId}:`}</h2>
							{todosData.map(({ id, title, completed }) => {
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
					</>
				)}
			</Container>
		</section>
	)
}
