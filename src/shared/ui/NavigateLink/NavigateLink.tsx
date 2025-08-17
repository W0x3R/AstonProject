import styles from "./NavigateLink.module.css"
import { Link, useLocation } from "react-router"

export const NavigateLink = ({ text, url }) => {
	const location = useLocation()

	return (
		<div className={styles["link-wrapper"]}>
			<Link
				className={styles.link}
				to={url}
				state={{ from: location.pathname }}
			>
				{text}
			</Link>
		</div>
	)
}
