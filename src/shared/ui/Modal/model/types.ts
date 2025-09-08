import { type MouseEvent } from "react"
export type TModal = {
	className?: string
	onClick: (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
	isModalOpen: boolean
}
