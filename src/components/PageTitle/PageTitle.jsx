import styles from './PageTitle.module.scss';
import Image from 'next/image';


export default function PageTitle({ title, text }) {
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<Image
						className={styles.triangleImg}
						src="/PageTitle/triangles.svg"
						alt="img"
						width={1080}
						height={412}
					/>
					<div className={styles.wrap}>
						<div className={styles.wrapInner}>

							<div className={styles.breadcrumbs}>хлебные крошки == еще больше крошек</div>

							<div className={styles.content}>
								<div className={styles.title}>{title}</div>
								<div className={styles.text}>{text}</div>
							</div>

						</div>

					</div>

				</div>
			</section>
		</>
	)
}