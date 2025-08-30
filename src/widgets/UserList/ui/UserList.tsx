import type { TUser } from "../../../entities/users/model/types"
import { ItemList } from "../../../shared/ui/ItemList/ItemList"
import styles from "./UserList.module.css"
import { Container } from "../../../shared/ui/Container/Container"
import { DataNotFound } from "../../../shared/ui/DataNotFound/DataNotFound"
import { NavigateLink } from "../../../shared/ui/NavigateLink/NavigateLink"
import { UserCard } from "../../../entities/users/ui/UserCard"

export const UserList = ({ usersData, error }) => {
	return (
		<section className={styles.section}>
			<Container>
				{error && (
					<DataNotFound>
						Ошибка загрузки пользователей. Повторите позже.
					</DataNotFound>
				)}
				{!error && usersData.length === 0 && (
					<p className={styles["no-users"]}>Пользователя пока нет.</p>
				)}
				{!error && usersData.length > 0 && (
					<>
						<h2 className={styles.title}>Все пользователи:</h2>
						<ItemList<TUser>
							items={usersData}
							renderItem={(userData) => {
								return (
									<div className={styles["user-wrapper"]} key={userData.id}>
										<UserCard userData={userData} />
										<NavigateLink
											text="Посты пользователя"
											url={`/users/${userData.id}/posts`}
										/>
										<NavigateLink
											text="Альбомы пользователя"
											url={`/users/${userData.id}/albums`}
										/>
										<NavigateLink
											text="Список дел пользователя"
											url={`/users/${userData.id}/todos`}
										/>
									</div>
								)
							}}
						/>
					</>
				)}
			</Container>
		</section>
	)
}
