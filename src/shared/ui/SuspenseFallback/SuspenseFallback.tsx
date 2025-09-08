import styles from "./SuspenseFallback.module.css"
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner"
import { useEffect } from "react"
import { controlBodyScroll } from "@shared/lib/controlBodyScroll"

export const SuspenseFallback = () => {
	useEffect(() => {
		controlBodyScroll("hidden")

		return () => controlBodyScroll("visible")
	}, [])

	return (
		<div className={styles["suspense-wrapper"]}>
			<LoadingSpinner />
			<p className={styles.title}>Загрузка...</p>
		</div>
	)
}
