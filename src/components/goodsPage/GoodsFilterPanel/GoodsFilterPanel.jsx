import { useState } from 'react';

import filters from '@/data/filters.js';

import GoodsFilterItem from '../GoodsFilterItem/GoodsFilterItem.jsx';

import styles from './GoodsFilterPanel.module.scss';

const GoodsFilterPanel = ({
	isOpenFilter,
	// setIsOpenFilter,
	filter,
	setFilter,
	onFilterChange,
	onFetchProducts,
}) => {
	const [selectedFilters, setSelectedFilters] = useState([filters[0].id]);

	console.log('Фильтр', filter);

	const handleCheckboxChange = (index) => {
		setFilter((prevFilter) => {
			const newFilter = [...prevFilter];
			const currentIndex = index - 1;
			newFilter[currentIndex] = newFilter[currentIndex] === 1 ? 0 : 1;
			return newFilter;
		});
		setSelectedFilters([]);
	};

	const handleChange = (id) => {
		setSelectedFilters([id]);
		setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
	};

	const handleReset = () => {
		setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
		setSelectedFilters([filters[0].id]);
	};

	const handleApply = () => {
		console.log('Фильтр применен', filter);

		if (selectedFilters.includes(filters[0].id)) {
			onFetchProducts()
				.then((data) => {
					console.log('Данные от fetchAllGoods:', data);
				})
				.catch((error) => console.error('Ошибка запроса:', error));
			console.log('Выполняем fetchAllGoods');
		} else {
			onFilterChange();
			console.log('Выполняем onFilterChange');
		}
	};

	return (
		<div
			className={`${styles.filterPanel} ${
				isOpenFilter ? styles.visibleMenu : styles.hiddenMenu
			}`}
		>
			<ul className={styles.filters}>
				{/* Отрисовка первого фильтра отдельно */}
				<li className={styles.filter}>
					<GoodsFilterItem
						name={filters[0].name}
						id={filters[0].id}
						value={filters[0].value}
						text={filters[0].text}
						checked={selectedFilters.includes(filters[0].id)}
						onChange={() => handleChange(filters[0].id)}
					/>
				</li>

				{/* Отрисовка остальных фильтров, пропуская первый */}
				{filters.slice(1).map((item, index) => (
					<li className={styles.filter} key={item.id}>
						<GoodsFilterItem
							name={item.name}
							id={item.id}
							value={item.value}
							text={item.text}
							checked={filter[index] === 1}
							onChange={() => handleCheckboxChange(index + 1)}
						/>
					</li>
				))}
			</ul>
			<div className={styles.buttons}>
				<button
					className={`${styles.buttonApply} button`}
					onClick={handleApply}
				>
					{/* Применить */}
					Бахнуть пивка
				</button>
				<button
					className={`${styles.buttonReset} button`}
					onClick={handleReset}
				>
					{/* Сбросить */}
					Зайти в танки
				</button>
			</div>
		</div>
	);
};

export default GoodsFilterPanel;
