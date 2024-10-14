import { useState, useEffect, useRef } from 'react';

import filters from '@/data/filters.js';

import { getFilterFlag, setFilterFlag } from '@/utils/localStorage.js';

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
	// const storedFlag = localStorage.getItem('filterFlag');

	// Чтение флага из localStorage
	useEffect(() => {
		const storedFlag = getFilterFlag();

		if (storedFlag == '' || storedFlag == null || storedFlag == 'true') {
			setFilterFlag('true');
			setSelectedFilters([filters[0].id]);
		} else {
			setFilterFlag('false');
		}
		if (!filter) {
			setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
			setFilterFlag('true');
		}

		setFlag(false);
	}, []);

	// Сохранение флага в localStorage
	useEffect(() => {
		if (getFilterFlag() == 'false') {
			setSelectedFilters([]);
		} else {
			setSelectedFilters([filters[0].id]);
		}
	}, [flag]);
	// В условиях был storedFlag const storedFlag = localStorage.getItem('filterFlag');
	// Если что-то будет с фильтром - можно заново прописать storedFlag или getFilterFlag

	const handleCheckboxChange = (index) => {
		setFilterFlag('false');

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
		setFilterFlag('true');
		setFilter([0, 0, 0, 0, 0, 0, 0, 0]);

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
		setFilterFlag('true');
		setFilter([0, 0, 0, 0, 0, 0, 0, 0]);
		setSelectedFilters([filters[0].id]);
	};

	const handleApply = () => {
		console.log('Фильтр применен', filter);
		if (selectedFilters.includes(filters[0].id)) {
			setFilterFlag('true');
			onFetchProducts()
				.then((data) => {
					// console.log('Данные от fetchAllGoods:', data);
				})
				.catch((error) => console.error('Ошибка запроса:', error));
			// console.log('Выполняем fetchAllGoods');
		} else {
			onFilterChange();
			setFilterFlag('false');
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
