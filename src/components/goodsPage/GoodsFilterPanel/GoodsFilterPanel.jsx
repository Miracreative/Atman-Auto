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
	const [selectedFilters, setSelectedFilters] = useState([filters[0].id]);
	const [flag, setFlag] = useState(true);
	const ref = useRef(null);

	// Чтение флага из localStorage
	useEffect(() => {
		const storedFlag = localStorage.getItem('filterFlag');
		const initialFlag = storedFlag !== null ? JSON.parse(storedFlag) : true;
		if (!filter) {
			setFilter([0, 0, 0, 0, 0, 0, 0, 0]); // или другая логика для начального состояния
		}
		setSelectedFilters([filters[0].id]);
		setFlag(initialFlag);
	}, []);

	// Сохранение флага в localStorage
	useEffect(() => {
		localStorage.setItem('filterFlag', JSON.stringify(flag));
	}, [flag]);

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
			// Удалите сброс filter, если он не нужен
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
			console.log('selectedFilters', filter);
			console.log('Выполняем onFilterChange');
		}
		// Оставьте setFlag(false) только в случае, если вам действительно нужно сбросить флаг
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
					Бахнуть пивка
				</button>
				<button
					className={`${styles.buttonReset} button`}
					onClick={handleReset}
				>
					Зайти в танки
				</button>
			</div>
		</div>
	);
};

export default GoodsFilterPanel;
