import styles from "./Button.module.css"

export const Button = ({ onClick, children, className }) => {
	return (
		<button className={styles[className]} onClick={onClick}>
			{children}
		</button>
	)
}
