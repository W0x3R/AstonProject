import { Link } from "react-router"
import styles from "./Footer.module.css"
import { Container } from "@shared/ui/Container/Container"
import { Logo } from "@shared/ui/Logo/Logo"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<p>© 2025 Учебный проект для Aston.</p>
					<Link to="/">
						<Logo />
					</Link>
					<a
						href="https://github.com/W0x3R/React-Intensive-Project"
						target="_blank"
					>
						GitHub проекта
					</a>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
