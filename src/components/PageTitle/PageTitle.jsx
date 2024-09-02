import styles from './PageTitle.module.scss';
import Image from 'next/image';


export default function PageTitle({ title, text }) {
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					{/* <div className={styles.imgWrap}> */}

					{/* </div> */}

					<div className={styles.wrap}>
						{/* <Image
							className={styles.triangleImgMob}
							src="/PageTitle/mobile-triangles.svg"
							alt="img"
							width={318}
							height={275}
						/> */}
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