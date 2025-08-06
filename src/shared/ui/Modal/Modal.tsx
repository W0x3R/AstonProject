import { createPortal } from "react-dom"
import styles from "./Modal.module.css"

export const Modal = ({ children, className, onClick, isModalOpen }) => {
	const modalRoot = document.getElementById("modal-root")

	return createPortal(
		<div
			className={`${styles.modal} ${className} ${isModalOpen ? styles.open : ""}`}
			onClick={onClick}
		>
			<div
				className={styles.modal__content}
				onClick={(e) => e.stopPropagation()}
			>
				<button onClick={onClick} className={styles.modal__close}>
					✕
				</button>
				{children}
			</div>
		</div>,
		modalRoot
	)
}
