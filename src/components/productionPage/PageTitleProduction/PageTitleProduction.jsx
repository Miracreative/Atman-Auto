import styles from './PageTitleProduction.module.scss';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.tsx';


export default function PageTitleProduction({ title, text, breadcrumbs }) {
	return (
		<>
			<section className={styles.section}>
				<div className="container">


					<div className={styles.wrap}>
						<Image
							className={styles.triangleImg}
							src="/PageTitle/triangles-geo.png"
							alt="img"
							width={942}
							height={498}
							priority={true}
						/>
						<Image
							className={styles.triangleImgMob}
							src="/PageTitle/triangles-mobile.png"
							alt="img"
							width={240}
							height={177}
							priority={true}
						/>
						<div className={styles.wrapInner}>

							<div className={styles.breadcrumbs}>
								<Breadcrumbs items={breadcrumbs} />
							</div>

							<div className={styles.content}>
								<h1 className={styles.title}>{title}</h1>
								<div className={styles.text}>{text}</div>
							</div>

						</div>

					</div>

				</div>
			</section>
		</>
	)
}