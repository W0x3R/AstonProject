import styles from "./Footer.module.css"
import { GLOBAL_CLASSES } from "../../app/styles/globalClasses.js"
import { Logo } from "../../shared/ui/Logo/Logo.js"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={GLOBAL_CLASSES.container}>
				<div className={styles.footer__wrapper}>
					<p>© 2025 Учебный проект для Aston.</p>
					<a href="/">
						<Logo />
					</a>
					<a href="#" target="_blank">
						GitHub проекта
					</a>
				</div>
			</div>
		</footer>
	)
}
