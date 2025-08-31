import notFoundImg from "@shared/assets/images/not-found-page.png"
import styles from "./NotFoundPage.module.css"
import { Link } from "react-router"
import { Container } from "@shared/ui/Container/Container"

const NotFoundPage = () => {
	return (
		<section>
			<Container>
				<div className={styles.wrapper}>
					<p className={styles["main-text"]}>
						Упс! Кажется, такой страницы не существует
					</p>
					<p className={styles.text}>
						Возможно, ссылка устарела или была введена неправильно
					</p>
					<img
						className={styles.img}
						src={notFoundImg}
						alt="page not found"
						width={650}
						height={428}
					/>
					<p className={styles.text}>
						Попробуйте вернуться на{" "}
						<Link className={styles.link} to="/">
							главную страницу{" "}
						</Link>
						или воспользуйтесь меню сайта
					</p>
				</div>
			</Container>
		</section>
	)
}

export default NotFoundPage
