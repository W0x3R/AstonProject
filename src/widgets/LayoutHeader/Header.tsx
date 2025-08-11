import { useEffect, useState } from "react"
import styles from "./Header.module.css"
import { Container } from "../../shared/ui/Container"
import { Button } from "../../shared/ui/Button/Button"
import { Modal } from "../../shared/ui/Modal/Modal"
import HeaderLogo from "../../shared/assets/images/logo.svg?react"
import { controlBodyScroll } from "../../shared/lib/controlBodyScroll"
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher"

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
						<HeaderLogo
							className={styles.logo}
							alt="logo"
							width={40}
							height={40}
						/>
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
						<h2 className={styles["modal-title"]}>О проекте</h2>
						<p className={styles["modal-description"]}>
							Приложение для просмотра постов и комментариев, основанное на
							публичном API JSONPlaceholder.
						</p>
					</Modal>
				</div>
			</Container>
		</header>
	)
}
