import PageTitle from './../../components/PageTitle/PageTitle.jsx';

import filters from '@/data/filters.js';

import styles from './Goods.module.scss';

export default function Goods() {
	return (
		<>
			<PageTitle
				title="Товары"
				text="Клейкие ленты и самоклеящиеся материалы"
			/>
			<section className={styles.section}>
				<div className={styles.filterPanel}>
					<div className={styles.filters}></div>
					<div className={styles.buttons}>
						<button className={`${styles.buttonApply} button`}>
							Применить
						</button>

						<button className={`${styles.buttonReset} button`}>
						Сбросить</button>
					</div>
				</div>
				<div className={styles.cards}></div>
			</section>
		</>
	);
}
