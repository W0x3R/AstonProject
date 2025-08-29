import styles from "./LoadingSpinner.module.css"
import Spinner from "../../assets/images/spinner.svg?react"

export const LoadingSpinner = () => {
	return (
		<div className={styles.spinner__wrapper}>
			<Spinner className={styles.spinner} width={60} height={60} alt="" />
		</div>
	)
}
