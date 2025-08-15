import styles from "./UserList.module.css"
import { Container } from "../../shared/ui/Container/Container"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound"
import { NavigateLink } from "../../shared/ui/NavigateLink/NavigateLink"
import { UserCard } from "../../entities/users/ui/UserCard"

export const UserList = ({ usersData = [] }) => {
	return (
		<section>
			<Container>
				{usersData.length === 0 && (
					<DataNotFound>Похоже, что пользователи не найдены.</DataNotFound>
				)}
				{usersData.map((user) => {
					return (
						<div className={styles["user-wrapper"]} key={user.id}>
							<UserCard userData={user} />
							<NavigateLink
								text="Дополнительная информация"
								url={`/users/${user.id}`}
							/>
						</div>
					)
				})}
			</Container>
		</section>
	)
}
