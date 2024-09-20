import filters from '@/data/filters.js';

import GoodsFilterItem from '../GoodsFilterItem/GoodsFilterItem.jsx';

import styles from './GoodsFilterPanel.module.scss';
import { useState } from 'react';

const GoodsFilterPanel = () => {
	const [isSelected, setIsSelected] = useState(false);

	// const [isCleared, setIsCleared] = useState(false);

	return (
		<div className={styles.filterPanel}>
			<ul className={styles.filters}>
				{filters.map((item) => (
					<li className={styles.filter} key={item.id}>
						<GoodsFilterItem
							name={item.name}
							id={item.id}
							value={item.value}
							text={item.text}
							// checked={isSelected}
							// onChange={() => setIsSelected(!isSelected)}
						/>
					</li>
				))}
			</ul>
			<div className={styles.buttons}>
				<button className={`${styles.buttonApply} button`}>Применить</button>
				<button className={`${styles.buttonReset} button`}>Сбросить</button>
			</div>
		</div>
	);
};

export default GoodsFilterPanel;
