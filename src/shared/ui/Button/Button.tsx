import { memo } from "react"
import styles from "./Button.module.css"
import type { TButtonProps } from "./model/types"

export const Button = memo(({ onClick, children, className }: TButtonProps) => {
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>
			{children}
		</button>
	)
})
