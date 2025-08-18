import { Link } from "react-router"
import styles from "./NavigateLink.module.css"

export const NavigateLink = ({ text, url }) => {
	return (
		<div className={styles["link-wrapper"]}>
			<Link className={styles.link} to={url}>
				{text}
			</Link>
		</div>
	)
}
