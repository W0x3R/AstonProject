import styles from "./Footer.module.css"
import footerLogo from "../../shared/assets/images/logo.webp"
import { GLOBAL_CLASSES } from "../../app/styles/globalClasses.js"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={GLOBAL_CLASSES.container}>
				<div className={styles.footer__wrapper}>
					<p>© 2025 Учебный проект для Aston.</p>
					<a href="/">
						<img
							className={styles.header__logo}
							src={footerLogo}
							alt="logo"
							width={40}
							height={40}
						/>
					</a>
					<a href="#" target="_blank">
						GitHub проекта
					</a>
				</div>
			</div>
		</footer>
	)
}
