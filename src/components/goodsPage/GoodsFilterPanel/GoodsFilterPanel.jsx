'use client';

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
	const [selectedFilters, setSelectedFilters] = useState([filters[0].id]); // Инициализация с первым фильтром

	// console.log(selectedFilters);

	const handleCheckboxChange = (index) => {
		// setSelectedFilters({prevFilter})
		setFilter((prevFilter) => {
			const newFilter = [...prevFilter];
			const currentIndex = index - 1; // Индекс чекбокса в массиве (пропускаем первый)
			newFilter[currentIndex] = newFilter[currentIndex] === 1 ? 0 : 1; // Переключаем состояние
			return newFilter;
		});
	};

	const handleChange = (id) => {
		const firstFilterId = filters[0].id; // Получаем идентификатор первого фильтра в момент вызова

		if (id === firstFilterId) {
			// Если выбран первый фильтр, обнуляем все остальные
			setFilter([0, 0, 0, 0, 0, 0, 0, 0]); // Обнуляем фильтры
			setSelectedFilters([firstFilterId]); // Сохраняем только первый фильтр в выбранных
		} else {
			setSelectedFilters((prevSelectedFilters) => {
				return prevSelectedFilters.includes(id)
					? prevSelectedFilters.filter((filterId) => filterId !== id) // Удаляем фильтр
					: [...prevSelectedFilters, id]; // Добавляем фильтр
			});

			// Отключаем первый фильтр, если он был активирован
			if (selectedFilters.includes(firstFilterId)) {
				setFilter((prevFilter) => {
					const newFilter = [...prevFilter];
					newFilter.fill(0); // Заполняем массив нулями
					console.log('newFilter', newFilter);

					// Включаем текущий чекбокс (1)
					newFilter[filters.findIndex((filter) => filter.id === id)] = 1;
					return newFilter;
				});
			} else {
				setFilter((prevFilter) => {
					const newFilter = [...prevFilter];
					newFilter[filters.findIndex((filter) => filter.id === id)] = 1; // Включаем текущий чекбокс
					return newFilter;
				});
			}
		}
	};

	const handleReset = () => {
		setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
		setSelectedFilters([filters[0].id]); // Сброс к первому фильтру
	};

	const handleApply = () => {
		fetchProducts(filter);
		console.log('Фильтры применены:', filter);
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
						// checked={selectedFilters.includes(filters[0].id)}
						checked={selectedFilters}
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
