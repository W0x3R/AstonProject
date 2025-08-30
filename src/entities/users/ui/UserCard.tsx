import type { TUserCardProps } from "../../../widgets/UserList/model/types"
import styles from "./UserCard.module.css"

export const UserCard = ({ userData }: TUserCardProps) => {
	const { name, username, email, phone, website, address, company } = userData

	return (
		<div className={styles["data-wrapper"]}>
			<div className={styles["info-wrapper"]}>
				<h2 className={styles.title}>Данные о пользователе:</h2>
				<p className={styles.info}>Имя: {name}</p>
				<p className={styles.info}>Никнейм: {username}</p>
				<a className={styles.info} href={`mailto:${email}`}>
					Емейл: {email}
				</a>
				<a className={styles.info} href={`tel:${phone}`}>
					Телефон: {userData.phone}
				</a>
				<a className={styles.info} href={website}>
					Вебсайт: {website}
				</a>
			</div>
			<div className={styles["adress-wrapper"]}>
				<h2 className={styles.title}>Адрес: </h2>
				<p className={styles.info}>Улица: {address.street}</p>
				<p className={styles.info}>Дом: {address.suite}</p>
				<p className={styles.info}>Город: {address.city}</p>
				<p className={styles.info}>Почтовый индекс: {address.zipcode}</p>
			</div>
			<div className={styles["company-wrapper"]}>
				<h2 className={styles.title}>Компания:</h2>
				<p className={styles.info}>Имя компании: {company.name}</p>
				<p className={styles.info}>Лозунг: {company.catchPhrase}</p>
				<p className={styles.info}>Слоган: {company.bs}</p>
			</div>
		</div>
	)
}
