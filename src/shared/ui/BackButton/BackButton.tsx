import { useNavigate } from "react-router"
import styles from "./BackButton.module.css"

export const BackButton = ({ position }) => {
	const navigate = useNavigate()

	return (
		<div className={`${styles["button-wrapper"]} ${styles[position]}`}>
			<button onClick={() => navigate(-1)} className={styles.button}>
				Вернуться назад
			</button>
		</div>
	)
}
