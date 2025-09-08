import { memo } from "react"
import type { TPostLengthFilterProps } from "../model/types"
import styles from "./PostLengthFilter.module.css"

const PostLengthFilter = ({ onFilterChange }: TPostLengthFilterProps) => {
	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		onFilterChange(Number(e.target.value))

	return (
		<form className={styles.form}>
			<label className={styles.label} htmlFor="post-length">
				Минимальная длина заголовка:
			</label>
			<input
				id="post-length"
				className={styles.input}
				onChange={handleFilterChange}
				type="number"
				inputMode="numeric"
				min={0}
			/>
		</form>
	)
}

export default memo(PostLengthFilter)
