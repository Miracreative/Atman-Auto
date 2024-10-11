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
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [flag, setFlag] = useState(true);
	const ref = useRef(null);
	const storedFlag = localStorage.getItem('filterFlag');

	// Чтение флага из localStorage
	useEffect(() => {
		if (storedFlag == '' || storedFlag == null || storedFlag == 'true') {
			localStorage.setItem('filterFlag', 'true');
			setSelectedFilters([filters[0].id]);
		} else {
			localStorage.setItem('filterFlag', 'false');
		}
		if (!filter) {
			setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
			localStorage.setItem('filterFlag', 'true');
		}

		setFlag(false);
	}, []);

	// Сохранение флага в localStorage
	useEffect(() => {
		if (localStorage.getItem('filterFlag') == 'false') {
			setSelectedFilters([]);
		} else {
			setSelectedFilters([filters[0].id]);
		}
	}, [storedFlag, flag]);

	const handleCheckboxChange = (index) => {
		setFilter((prevFilter) => {
			const newFilter = [...prevFilter];
			const currentIndex = index - 1;
			newFilter[currentIndex] = newFilter[currentIndex] === 1 ? 0 : 1;
			return newFilter;
		});
		setFlag(false);
		setSelectedFilters([]);
	};

	const handleChange = (id) => {
		setSelectedFilters((prevSelected) =>
			prevSelected.includes(id)
				? prevSelected.filter((item) => item !== id)
				: [...prevSelected, id],
		);
		setFilter((prevFilter) => {
			const currentIndex =
				filters.findIndex((filterItem) => filterItem.id === id) - 1;
			if (currentIndex >= 0) {
				const newFilter = [...prevFilter];
				newFilter[currentIndex] = newFilter[currentIndex] === 1 ? 0 : 1;
				return newFilter;
			}
			return prevFilter;
		});
		setFlag(true);
	};

	const handleReset = () => {
		localStorage.setItem('filterFlag', 'true');
		setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
		setSelectedFilters([filters[0].id]);
	};

	const handleApply = () => {
		console.log('Фильтр применен', filter);
		if (selectedFilters.includes(filters[0].id)) {
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
						checked={selectedFilters.includes(filters[0].id)}
						onChange={() => handleChange(filters[0].id)}
						ref={ref}
					/>
				</li>
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
					Применить
					{/* Бахнуть пивка */}
				</button>
				<button
					className={`${styles.buttonReset} button`}
					onClick={handleReset}
				>
					Сбросить
					{/* Зайти в танки */}
				</button>
			</div>
		</div>
	);
};

export default GoodsFilterPanel;
