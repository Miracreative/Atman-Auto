import { useState, useEffect, useRef } from 'react';
import filters from '@/data/filters.js';
import GoodsFilterItem from '../GoodsFilterItem/GoodsFilterItem.jsx';
import styles from './GoodsFilterPanel.module.scss';

const GoodsFilterPanel = ({
	isOpenFilter,
	filter,
	setFilter,
	onFilterChange,
	onFetchProducts,
}) => {
	const [isFirstFilterSelected, setIsFirstFilterSelected] = useState(false);
	const [otherSelectedFilters, setOtherSelectedFilters] = useState([]);

	const handleFirstCheckboxChange = (id) => {
		const newValue = !isFirstFilterSelected;
		setIsFirstFilterSelected(newValue);
		localStorage.setItem('filterFlag', newValue ? 'true' : 'false');

		if (newValue) {
			setOtherSelectedFilters([]);
			setFilter([1, 0, 0, 0, 0, 0, 0, 0]);
		} else {
			setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
		}
	};

	const handleOtherCheckboxChange = (id) => {
		let updatedFilters = [...otherSelectedFilters];
		if (updatedFilters.includes(id)) {
			updatedFilters = updatedFilters.filter((item) => item !== id);
		} else {
			updatedFilters.push(id);
		}
		setOtherSelectedFilters(updatedFilters);
		localStorage.setItem('filterFlag', 'false');

		const newFilterState = filters
			.slice(1)
			.map((filterItem) => (updatedFilters.includes(filterItem.id) ? 1 : 0));
		setFilter(newFilterState);
		setIsFirstFilterSelected(false);
	};

	useEffect(() => {
		const storedFlag = localStorage.getItem('filterFlag');
		if (storedFlag === 'true') {
			setIsFirstFilterSelected(true);
			setOtherSelectedFilters([]);
			setFilter([1, 0, 0, 0, 0, 0, 0, 0]);
		} else if (storedFlag === 'false') {
			setIsFirstFilterSelected(false);
			setOtherSelectedFilters([]);
			setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
		}
		// Если необходимо инициализировать другие фильтры из localStorage, добавьте соответствующую логику
	}, []);

	const handleReset = () => {
		setIsFirstFilterSelected(true);
		setOtherSelectedFilters([]);
		setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
		localStorage.setItem('filterFlag', 'true');
	};

	const handleApply = () => {
		console.log('Фильтр применен', filter);
		if (isFirstFilterSelected) {
			localStorage.setItem('filterFlag', 'true');
			onFetchProducts()
				.then((data) => {
					console.log('Данные от fetchAllGoods:', data);
				})
				.catch((error) => console.error('Ошибка запроса:', error));
			console.log('Выполняем fetchAllGoods');
		} else {
			onFilterChange();
			localStorage.setItem('filterFlag', 'false');
			console.log('selectedFilters', filter);
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
				<li className={styles.filter}>
					<GoodsFilterItem
						name={filters[0].name}
						id={filters[0].id}
						value={filters[0].value}
						text={filters[0].text}
						checked={isFirstFilterSelected}
						onChange={() => handleFirstCheckboxChange(filters[0].id)}
					/>
				</li>
				{filters.slice(1).map((item) => (
					<li className={styles.filter} key={item.id}>
						<GoodsFilterItem
							name={item.name}
							id={item.id}
							value={item.value}
							text={item.text}
							checked={otherSelectedFilters.includes(item.id)}
							onChange={() => handleOtherCheckboxChange(item.id)}
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
