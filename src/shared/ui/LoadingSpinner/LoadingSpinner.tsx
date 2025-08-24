import styles from "./LoadingSpinner.module.css"
import Spinner from "../../assets/images/spinner.svg?react"

export const LoadingSpinner = ({ size }) => {
	return (
		<div className={styles.spinner__wrapper}>
			<Spinner
				className={`${styles.spinner} ${styles[size]}`}
				width={60}
				height={60}
				alt=""
			/>
		</div>
	)
}
