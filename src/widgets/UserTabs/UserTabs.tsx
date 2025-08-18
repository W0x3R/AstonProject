import { NavLink } from "react-router"
import styles from "./UserTabs.module.css"

export const UserTabs = () => {
	const setIsActive = ({ isActive }) =>
		`${styles["list-link"]} ${isActive ? styles.active : ""}`

	return (
		<nav>
			<ul className={styles.list}>
				<li className={styles["list-item"]}>
					<NavLink className={setIsActive} to={"/posts"}>
						Посты
					</NavLink>
				</li>
				<li className={styles["list-item"]}>
					<NavLink className={setIsActive} to={"/albums"}>
						Альбомы
					</NavLink>
				</li>
				<li className={styles["list-item"]}>
					<NavLink className={setIsActive} to={"/users"}>
						Пользователи
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
