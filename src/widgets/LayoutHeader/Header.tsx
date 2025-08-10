import { useEffect, useState } from "react"
import styles from "./Header.module.css"
import { Button } from "../../shared/ui/Button/Button"
import { Modal } from "../../shared/ui/Modal/Modal"
import HeaderLogo from "../../shared/assets/images/logo.svg?react"
import { controlBodyScroll } from "../../shared/lib/controlBodyScroll"
import { GLOBAL_CLASSES } from "../../app/styles/globalClasses.js"
import { ThemeSwitcher } from "../../app/features/ThemeSwitcher/ui/ThemeSwitcher.js"

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
			<div className={GLOBAL_CLASSES.container}>
				<div className={styles.header__wrapper}>
					<a href="/">
						<HeaderLogo
							className={styles.header__logo}
							alt="logo"
							width={40}
							height={40}
						/>
					</a>
					<Button onClick={handleModalOpen} className={styles["header__btn"]}>
						<span className={styles["header__btn-text"]}>О проекте</span>
					</Button>
					<ThemeSwitcher />

					<Modal
						className={styles.header__modal}
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
			</div>
		</header>
	)
}
