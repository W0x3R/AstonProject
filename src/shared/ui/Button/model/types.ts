import type { MouseEvent, ReactNode } from "react"

export type TButtonProps = {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	children: ReactNode
	className?: string
}
