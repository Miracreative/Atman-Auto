import { useState } from 'react';
import filters from '@/data/filters.js';
import GoodsFilterItem from '../GoodsFilterItem/GoodsFilterItem.jsx';
import styles from './GoodsFilterPanel.module.scss';

const GoodsFilterPanel = ({ isOpenFilter }) => {
	const firstFilterId = filters[0].id;

	const [selectedFilters, setSelectedFilters] = useState([firstFilterId]);

	const handleChange = (id) => {
		setSelectedFilters((prevSelectedFilters) => {
			if (id === firstFilterId) {
				return prevSelectedFilters.includes(id) ? [] : [id];
			} else {
				if (prevSelectedFilters.includes(firstFilterId)) {
					return [id];
				} else {
					return prevSelectedFilters.includes(id)
						? prevSelectedFilters.filter((filterId) => filterId !== id)
						: [...prevSelectedFilters, id];
				}
			}
		});
	};

	const handleReset = () => {
		setSelectedFilters([firstFilterId]);
	};

	return (
		<div
			className={`${styles.filterPanel} ${
				isOpenFilter ? styles.visibleMenu : styles.hiddenMenu
			}`}
		>
			<ul className={styles.filters}>
				{filters.map((item) => (
					<li className={styles.filter} key={item.id}>
						<GoodsFilterItem
							name={item.name}
							id={item.id}
							value={item.value}
							text={item.text}
							checked={selectedFilters.includes(item.id)}
							onChange={() => handleChange(item.id)}
							disabled={
								item.id !== firstFilterId &&
								selectedFilters.includes(firstFilterId)
							}
						/>
					</li>
				))}
			</ul>
			<div className={styles.buttons}>
				<button className={`${styles.buttonApply} button`}>Применить</button>
				<button
					className={`${styles.buttonReset} button`}
					onClick={handleReset}
				>
					Сбросить
				</button>
			</div>
		</div>
	);
};

export default GoodsFilterPanel;
