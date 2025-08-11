import { Container } from "../../shared/ui/Container"
import styles from "./Footer.module.css"
import FooterLogo from "../../shared/assets/images/logo.svg?react"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footer__wrapper}>
					<p>© 2025 Учебный проект для Aston.</p>
					<a href="/">
						<FooterLogo
							className={styles.footer__logo}
							alt="logo"
							width={40}
							height={40}
						/>
					</a>
					<a href="#" target="_blank">
						GitHub проекта
					</a>
				</div>
			</Container>
		</footer>
	)
}
