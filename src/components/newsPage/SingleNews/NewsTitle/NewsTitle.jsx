import styles from './NewsTitle.module.scss';



export default function NewsTitle({ singleNews }) {
	console.log(singleNews);

	return (
		<>
			<section className={styles.section}>
				<div className="container">


					<div className={styles.wrap}>

						<div className={styles.wrapInner}>

							<div className={styles.breadcrumbs}>хлебные крошки == еще больше крошек</div>

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