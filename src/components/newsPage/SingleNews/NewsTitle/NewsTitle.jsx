import styles from './NewsTitle.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.tsx';



export default function NewsTitle({ title, descr }) {

	const breadcrumbs = [
		{ title: 'Главная', href: '/' },
		{
			title: 'Новости',
			href: '/news',
		},
		{
			title: title,
		},
	];

	return (
		<>
			<section className={styles.section}>
				<div className="container">


					<div className={styles.wrap}>

						<div className={styles.wrapInner}>

							<div className={styles.breadcrumbs}>
								<Breadcrumbs items={breadcrumbs} />
							</div>

							<div className={styles.content}>
								<h1 className={styles.title}> {title} </h1>
								<div className={styles.text}> {descr} </div>
							</div>

						</div>

					</div>

				</div>
			</section>
		</>
	)
}