import type { SoutData } from '@/types/sout';

import soutDataFromSource from '@/data/sout.js';

import SoutItem from '../SoutItem/SoutItem';

import styles from './SoutContent.module.scss';

const SoutContent = () => {
	const sout: SoutData[] = soutDataFromSource as SoutData[];

	return (
		<section className={styles.section}>
			<h2>Годовой отчет</h2>
			<ul className={styles.list}>
				{sout.map((item) => (
					<li key={item.id}>
						<SoutItem
							id={item.id}
							name={item.name}
							fileType={item.fileType}
							fileSize={item.fileSize}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SoutContent;
