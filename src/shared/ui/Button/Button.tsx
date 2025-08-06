import styles from "./Button.module.css"

export const Button = ({ onClick, children, className }) => {
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>
			{children}
		</button>
	)
}
