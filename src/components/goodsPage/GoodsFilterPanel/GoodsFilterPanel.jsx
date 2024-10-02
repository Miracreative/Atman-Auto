import { useState } from 'react';

import filters from '@/data/filters.js';

import GoodsFilterItem from '../GoodsFilterItem/GoodsFilterItem.jsx';

import styles from './GoodsFilterPanel.module.scss';

const GoodsFilterPanel = ({
	isOpenFilter,
	setIsOpenFilter,
	filter,
	setFilter,
	fetchProducts,
}) => {
	const firstFilterId = filters[0].id;

	const [selectedFilters, setSelectedFilters] = useState([firstFilterId]);

	const handleCheckboxChange = (index) => {
		// setFilter(!filter);
		setFilter((prevFilter) => {
			return prevFilter.map((item, filterIndex) => {
				if (filterIndex === index - 1) {
					return item === 0 ? 1 : 0;
				}
				return item;
			});
		});
	};

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

		// const newFilterParams = [...filter];
		// console.log('newFilterParams', newFilterParams);

		// handleCheckboxChange();
	};

	const handleReset = () => {
		setSelectedFilters([firstFilterId]);
	};

	const handleApply = () => {
		// setIsOpenFilter(false);
		fetchProducts();
		handleChange(firstFilterId);
		// handleCheckboxChange(1);
		console.log('потом вернуть');
	};

	return (
		<div
			className={`${styles.filterPanel} ${
				isOpenFilter ? styles.visibleMenu : styles.hiddenMenu
			}`}
		>
			<ul className={styles.filters}>
				{filters.map((item, index) => (
					<li className={styles.filter} key={item.id}>
						<GoodsFilterItem
							name={item.name}
							id={item.id}
							value={item.value}
							text={item.text}
							// checked={selectedFilters.includes(item.id)}
							// onChange={() => handleChange(item.id)}
							checked={filter[index - 1] === 1} // Используем состояние для проверки
							onChange={() => handleCheckboxChange(index)} // Передаем индекс чекбокса
							disabled={
								item.id !== firstFilterId &&
								selectedFilters.includes(firstFilterId)
							}
						/>
					</li>
				))}
			</ul>
			<div className={styles.buttons}>
				<button
					className={`${styles.buttonApply} button`}
					onClick={handleApply}
				>
					Применить
				</button>
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
