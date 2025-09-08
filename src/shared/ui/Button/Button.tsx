import { memo, type PropsWithChildren } from "react"
import type { TButtonProps } from "./model/types"
import styles from "./Button.module.css"

export const Button = memo(
	({ onClick, children, className }: PropsWithChildren<TButtonProps>) => {
		return (
			<button className={`${styles.button} ${className}`} onClick={onClick}>
				{children}
			</button>
		)
	}
)
