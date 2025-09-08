import type { MouseEvent } from "react"

export type TButtonProps = {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	className?: string
}
