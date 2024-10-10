import styles from './NewsTitle.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.tsx';



export default function NewsTitle({ singleNews }) {
	console.log('НОВОСТЬ ' + singleNews);

	const breadcrumbs = [
		{ title: 'Главная', href: '/' },
		{
			title: 'Новости',
			href: '/news',
		},
		{
			// title: `${singleNews.title}`,
			title: 'Новость',
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
								<h1 className={styles.title}> {singleNews} </h1>
								<div className={styles.text}>2</div>
							</div>

						</div>

					</div>

				</div>
			</section>
		</>
	)
}