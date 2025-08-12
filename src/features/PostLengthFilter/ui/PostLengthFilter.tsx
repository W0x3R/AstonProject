import styles from "./PostLengthFilter.module.css"

export const PostLengthFilter = ({ value, onFilterChange }) => {
	return (
		<form className={styles.form}>
			<label className={styles.label} htmlFor="post-length">
				Минимальная длина заголовка:
			</label>
			<input
				id="post-length"
				className={styles.input}
				onChange={(e) => onFilterChange(e)}
				value={value}
				type="number"
				inputMode="numeric"
				min={0}
			/>
		</form>
	)
}
