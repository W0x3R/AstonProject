import { useEffect, useState } from "react"
import { Link } from "react-router"
import styles from "./Header.module.css"
import { Container } from "@shared/ui/Container/Container.js"
import { Button } from "@shared/ui/Button/Button.js"
import { Modal } from "@shared/ui/Modal/Modal.js"
import { controlBodyScroll } from "@shared/lib/controlBodyScroll.js"
import { ThemeSwitcher } from "@features/ThemeSwitcher/ui/ThemeSwitcher.js"
import { Logo } from "@shared/ui/Logo/Logo.js"
import { UserTabs } from "../../UserTabs/ui/UserTabs.js"

const Header = () => {
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
					<Link to="/">
						<Logo />
					</Link>
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

export default Header
