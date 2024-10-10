import { useState } from 'react';

import filters from '@/data/filters.js';

// import { fetchAllGoods } from '@/api/goodsService.js';

import GoodsFilterItem from '../GoodsFilterItem/GoodsFilterItem.jsx';

import styles from './GoodsFilterPanel.module.scss';

const GoodsFilterPanel = ({
	isOpenFilter,
	setIsOpenFilter,
	filter,
	setFilter,
	onFilterChange,
	onFetchProducts,
}) => {
	const [selectedFilters, setSelectedFilters] = useState([filters[0].id]); // Инициализация с первым фильтром

	console.log('Фильтр', filter);

	const handleCheckboxChange = (index) => {
		setFilter((prevFilter) => {
			const newFilter = [...prevFilter];
			const currentIndex = index - 1; // Индекс чекбокса в массиве (пропускаем первый)
			newFilter[currentIndex] = newFilter[currentIndex] === 1 ? 0 : 1; // Переключаем состояние
			return newFilter;
		});
		// Снимаем выбор с первого чекбокса
		setSelectedFilters([]);
	};

	const handleChange = (id) => {
		// Устанавливаем выбранным только первый чекбокс
		setSelectedFilters([id]);
		// Не изменяем массив filter
	};

	const handleReset = () => {
		setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
		setSelectedFilters([filters[0].id]); // Сброс к первому фильтру
	};

	const handleApply = () => {
		console.log('Фильтр применен', filter);

		if (selectedFilters.includes(filters[0].id)) {
			onFetchProducts()
				.then((data) => {
					console.log('Данные от fetchAllGoods:', data);
					// обновите состояние для рендера товаров
				})
				.catch((error) => console.error('Ошибка запроса:', error));
			console.log('Выполняем fetchAllGoods');
		} else {
			onFilterChange();
			console.log('Выполняем onFilterChange');
		}
	};

	const handleFilteredApply = () => {
		onFilterChange();
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
							onChange={() => handleCheckboxChange(index + 1)} // Индекс + 1, так как мы пропускаем первый
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
