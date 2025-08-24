import { useEffect, useState } from "react"
import styles from "./Header.module.css"
import { Container } from "../../shared/ui/Container/Container"
import { Button } from "../../shared/ui/Button/Button"
import { Modal } from "../../shared/ui/Modal/Modal"
import { controlBodyScroll } from "../../shared/lib/controlBodyScroll"
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher"
import { Logo } from "../../shared/ui/Logo/Logo.js"
import { UserTabs } from "../UserTabs/UserTabs.js"

export const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModalOpen = () => setIsModalOpen(true)

	const handleModalClose = () => setIsModalOpen(false)

	useEffect(() => {
		if (isModalOpen) {
			controlBodyScroll("hidden")
		} else {
			controlBodyScroll("visible")
		}
	}, [isModalOpen])

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.wrapper}>
					<a href="/">
						<Logo />
					</a>
					<Button
						onClick={handleModalOpen}
						className={styles["open-modal-btn"]}
					>
						<span className={styles["open-modal-btn-text"]}>О проекте</span>
					</Button>
					<ThemeSwitcher />

					<Modal
						className={styles.modal}
						onClick={handleModalClose}
						isModalOpen={isModalOpen}
					>
						<Modal.Header>О проекте</Modal.Header>
						<Modal.Body>
							Приложение для просмотра постов и комментариев, основанное на
							публичном API JSONPlaceholder.
						</Modal.Body>
						<Modal.Footer>© 2025 Учебный проект для Aston.</Modal.Footer>
					</Modal>
				</div>
				<UserTabs />
			</Container>
		</header>
	)
}
