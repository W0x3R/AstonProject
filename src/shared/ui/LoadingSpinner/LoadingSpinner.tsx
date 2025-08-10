import styles from "./LoadingSpinner.module.css"
import loadingSpinner from "../../assets/images/spinner.svg"

export const LoadingSpinner = ({ size }) => {
	return (
		<div className={styles.spinner__wrapper}>
			<img
				className={`${styles.spinner} ${styles[size]}`}
				width={60}
				height={60}
				src={loadingSpinner}
				alt=""
			/>
		</div>
	)
}
