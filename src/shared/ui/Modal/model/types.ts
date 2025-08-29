import { type MouseEvent, type ReactNode } from "react"
export type TModal = {
	children: ReactNode
	className?: string
	onClick: (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
	isModalOpen: boolean
}
