import { useState } from 'react';
import filters from '@/data/filters.js';
import GoodsFilterItem from '../GoodsFilterItem/GoodsFilterItem.jsx';
import styles from './GoodsFilterPanel.module.scss';

const GoodsFilterPanel = () => {
	const [selectedFilters, setSelectedFilters] = useState([]);

	// Обработчик изменения состояния чекбокса
	const handleChange = (id) => {
		setSelectedFilters((prevSelectedFilters) => {
			if (prevSelectedFilters.includes(id)) {
				// Если элемент уже выбран, убираем его из списка
				return prevSelectedFilters.filter((filterId) => filterId !== id);
			} else {
				// Добавляем новый выбранный элемент
				return [...prevSelectedFilters, id];
			}
		});
	};

	const handleReset = () => {
		setSelectedFilters([]);
	};

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
							checked={selectedFilters.includes(item.id)}
							onChange={() => handleChange(item.id)}
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
