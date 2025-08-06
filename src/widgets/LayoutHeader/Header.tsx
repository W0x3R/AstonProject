import { useEffect, useState } from "react"
import { Button } from "../../shared/ui/Button/Button"
import { Modal } from "../../shared/ui/Modal/Modal"
import headerLogo from "../../shared/assets/images/logo.webp"
import styles from "./Header.module.css"
import { controlBodyScroll } from "../../shared/lib/controlBodyScroll"

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
			<div className="container">
				<div className={styles.wrapper}>
					<a href="/">
						<img
							className={styles.header__logo}
							src={headerLogo}
							alt="logo"
							width={40}
							height={40}
						/>
					</a>

					<Button onClick={handleModalOpen} className={styles["header__btn"]}>
						<span className={styles["header__btn-text"]}>О проекте</span>
					</Button>

					<Modal
						className={styles.header__modal}
						onClick={handleModalClose}
						isModalOpen={isModalOpen}
					>
						<h2 className={styles["header__modal-title"]}>О проекте</h2>
						<p className={styles["header__modal-description"]}>
							Приложение для просмотра постов и комментариев, основанное на
							публичном API JSONPlaceholder.
						</p>
					</Modal>
				</div>
			</div>
		</header>
	)
}
