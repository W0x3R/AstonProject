import { useState } from "react"
import { Button } from "../../shared/ui/Button/Button"
import { Modal } from "../../shared/ui/Modal/Modal"
import styles from "./Header.module.css"

export const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModalOpen = () => setIsModalOpen(true)

	const handleModalClose = () => setIsModalOpen(false)

	return (
		<header className={styles.header}>
			<div className="container">
				<Button onClick={handleModalOpen}>О проекте</Button>
				{isModalOpen && (
					<Modal className={"header__modal"} onClick={handleModalClose}>
						<h2>О проекте</h2>
						<p>
							Приложение для просмотра постов и комментариев, основанное на
							публичном API JSONPlaceholder.
						</p>
					</Modal>
				)}
			</div>
		</header>
	)
}
