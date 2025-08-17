import styles from "./UserCard.module.css"

export const UserCard = ({ userData }) => {
	return (
		<div className={styles["data-wrapper"]}>
			<div className={styles["info-wrapper"]}>
				<h2 className={styles.title}>Данные о пользователе:</h2>
				<p className={styles.info}>Имя: {userData.name}</p>
				<p className={styles.info}>Никнейм: {userData.username}</p>
				<a className={styles.info} href={`mailto:${userData.email}`}>
					Емейл: {userData.email}
				</a>
				<a className={styles.info} href={`tel:${userData.phone}`}>
					Телефон: {userData.phone}
				</a>
				<a className={styles.info} href={userData.website}>
					Вебсайт: {userData.website}
				</a>
			</div>
			<div className={styles["adress-wrapper"]}>
				<h2 className={styles.title}>Адрес: </h2>
				<p className={styles.info}>Улица: {userData.address.street}</p>
				<p className={styles.info}>Дом: {userData.address.suite}</p>
				<p className={styles.info}>Город: {userData.address.city}</p>
				<p className={styles.info}>
					Почтовый индекс: {userData.address.zipcode}
				</p>
			</div>
			<div className={styles["company-wrapper"]}>
				<h2 className={styles.title}>Компания:</h2>
				<p className={styles.info}>Имя компании: {userData.company.name}</p>
				<p className={styles.info}>Лозунг: {userData.company.catchPhrase}</p>
				<p className={styles.info}>Слоган: {userData.company.bs}</p>
			</div>
		</div>
	)
}
