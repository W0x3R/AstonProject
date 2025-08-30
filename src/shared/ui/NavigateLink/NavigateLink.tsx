import { Link } from "react-router"
import type { TNavigateLinkProps } from "./model/types"
import styles from "./NavigateLink.module.css"

export const NavigateLink = ({ text, url }: TNavigateLinkProps) => {
	return (
		<div className={styles["link-wrapper"]}>
			<Link className={styles.link} to={url}>
				{text}
			</Link>
		</div>
	)
}
