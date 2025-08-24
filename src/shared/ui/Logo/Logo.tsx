import styles from "./Logo.module.css"
import LogoIcon from "../../assets/images/logo.svg?react"

export const Logo = () => {
	return <LogoIcon className={styles.logo} alt="logo" width={40} height={40} />
}
