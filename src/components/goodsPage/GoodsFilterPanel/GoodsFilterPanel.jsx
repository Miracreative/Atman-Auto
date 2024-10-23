import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
	getAllGoods,
	getFilteredMainParamGoods,
	setFilterMainParamGoods,
	setFirstFilter,
	setFlag,
} from '@/store/goods/goodsSlice';

import filters from '@/data/filters.js';

import { getFilterFlag, setFilterFlag } from '@/utils/localStorage.js';

import GoodsFilterItem from '../GoodsFilterItem/GoodsFilterItem.jsx';

import styles from './GoodsFilterPanel.module.scss';

const GoodsFilterPanel = ({ isOpenFilter, setIsOpenFilter }) => {
	const ref = useRef(null);
	const dispatch = useDispatch();

	const { filterMainParam, isMobile, firstFilter, flag } = useSelector(
		(state) => state.goods,
	);

	// Чтение флага из localStorage
	useEffect(() => {
		const storedFlag = getFilterFlag();

		if (storedFlag == '' || storedFlag == null || storedFlag == 'true') {
			setFilterFlag('true');
			dispatch(setFirstFilter([filters[0].id]));
		} else {
			setFilterFlag('false');
		}

		if (!filterMainParam) {
			dispatch(setFilterMainParamGoods([0, 0, 0, 0, 0, 0, 0, 0]));
			setFilterFlag('true');
		}

		dispatch(setFlag(false));
	}, []);

	// Сохранение флага в localStorage
	useEffect(() => {
		if (getFilterFlag() == 'false') {
			dispatch(setFirstFilter([]));
		} else {
			dispatch(setFirstFilter([filters[0].id]));
		}
	}, [flag]);
	// В условиях был storedFlag const storedFlag = localStorage.getItem('filterFlag');
	// Если что-то будет с фильтром - можно заново прописать storedFlag или getFilterFlag

	const handleCheckboxChange = (index) => {
		setFilterFlag('false');

		const getHandleCheckboxFilter = (prevFilter) => {
			const newFilter = [...prevFilter];
			const currentIndex = index - 1;
			newFilter[currentIndex] = newFilter[currentIndex] === 1 ? 0 : 1; // переключение значения

			return newFilter;
		};

		const checkboxFilter = getHandleCheckboxFilter(filterMainParam);

		dispatch(setFilterMainParamGoods(checkboxFilter));
		dispatch(setFlag(false));
		dispatch(setFirstFilter([]));
	};

	const handleChange = (id) => {
		setFilterFlag('true');

		const getHandleFilter = (prevFilter) => {
			const currentIndex =
				filters.findIndex((filterItem) => filterItem.id === id) - 1;
			if (currentIndex >= 0) {
				const newFilter = [...prevFilter];
				newFilter[currentIndex] = newFilter[currentIndex] === 1 ? 0 : 1;
				return newFilter;
			}
			return prevFilter;
		};

		const newFilter = getHandleFilter(filterMainParam);

		dispatch(setFilterMainParamGoods(newFilter));
		dispatch(setFilterMainParamGoods([0, 0, 0, 0, 0, 0, 0, 0]));
		dispatch(setFlag(true));
	};

	const handleApply = () => {
		if (isMobile) {
			setIsOpenFilter(false);
		}

		if (firstFilter.includes(filters[0].id)) {
			setFilterFlag('true');
			dispatch(getAllGoods());
		} else {
			dispatch(getFilteredMainParamGoods(filterMainParam));
			setFilterFlag('false');
		}
	};

	const handleReset = () => {
		setFilterFlag('true');
		dispatch(setFilterMainParamGoods([0, 0, 0, 0, 0, 0, 0, 0]));
		dispatch(setFirstFilter([filters[0].id]));
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
						checked={firstFilter.includes(filters[0].id)}
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
							checked={filterMainParam[index] === 1}
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
