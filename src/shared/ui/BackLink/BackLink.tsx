import styles from "./BackLink.module.css"
import { Link, useLocation } from "react-router"

export const BackLink = ({ position }) => {
	const location = useLocation()
	const backUrl = location.state.from
	return (
		<div className={`${styles["link-wrapper"]} ${styles[position]}`}>
			<Link
				className={styles.link}
				to={backUrl}
				state={{ from: location.pathname }}
			>
				Вернуться назад
			</Link>
		</div>
	)
}
