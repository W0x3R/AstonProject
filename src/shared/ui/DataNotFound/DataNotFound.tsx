import type { ReactNode } from "react"
import styles from "./DataNotFound.module.css"
import errorImage from "../../assets/images/error.png"

export const DataNotFound = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.wrapper}>
			<img src={errorImage} alt="error-image" width={300} height={286} />
			<p className={styles.body}>{children}</p>
		</div>
	)
}
