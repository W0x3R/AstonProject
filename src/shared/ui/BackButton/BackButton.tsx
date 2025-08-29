import { useNavigate } from "react-router"
import styles from "./BackButton.module.css"
import type { TBackButtonProps } from "./types"

export const BackButton = ({ position }: { position: TBackButtonProps }) => {
	const navigate = useNavigate()

	return (
		<div className={`${styles["button-wrapper"]} ${styles[position]}`}>
			<button onClick={() => navigate(-1)} className={styles.button}>
				Вернуться назад
			</button>
		</div>
	)
}
