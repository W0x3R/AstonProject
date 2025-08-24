import { Container } from "../../shared/ui/Container/Container"
import styles from "./Footer.module.css"
import { Logo } from "../../shared/ui/Logo/Logo.js"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<p>© 2025 Учебный проект для Aston.</p>
					<a href="/">
						<Logo />
					</a>
					<a href="#" target="_blank">
						GitHub проекта
					</a>
				</div>
			</Container>
		</footer>
	)
}
