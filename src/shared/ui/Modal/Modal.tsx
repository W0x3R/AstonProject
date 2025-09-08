import { createPortal } from "react-dom"
import type { PropsWithChildren } from "react"
import type { TModal } from "./model/types"
import styles from "./Modal.module.css"

export const Modal = ({
	children,
	className,
	onClick,
	isModalOpen,
}: PropsWithChildren<TModal>) => {
	const modalRoot = document.getElementById("modal-root") as HTMLElement

	return createPortal(
		<div
			className={`${styles.modal} ${className} ${isModalOpen ? styles.open : ""}`}
			onClick={onClick}
		>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<button onClick={onClick} className={styles["close-btn"]}>
					✕
				</button>
				{children}
			</div>
		</div>,
		modalRoot
	)
}

Modal.Header = ({ children }: PropsWithChildren) => (
	<h1 className={styles.modal__header}>{children}</h1>
)

Modal.Body = ({ children }: PropsWithChildren) => (
	<p className={styles.modal__body}>{children}</p>
)

Modal.Footer = ({ children }: PropsWithChildren) => (
	<p className={styles.modal__footer}>{children}</p>
)
