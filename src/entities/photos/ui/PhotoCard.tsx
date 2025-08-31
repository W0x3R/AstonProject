import type { TPhotoCardProps } from "../model/types"
import { GLOBAL_CLASSES } from "@shared/constants/globalClasses"
import styles from "./PhotoCard.module.css"

export const PhotoCard = ({ src, title }: TPhotoCardProps) => {
	const fallBackUrl = GLOBAL_CLASSES.fallbackImgUrl

	return (
		<figure className={styles.figure}>
			<figcaption className={styles.title}>{title}</figcaption>
			<img
				src={fallBackUrl || src}
				alt={title}
				width={640}
				height={480}
				loading="lazy"
			/>
		</figure>
	)
}
