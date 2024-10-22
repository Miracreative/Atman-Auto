'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';

import { setFilterMainParam, setFirstFilter } from '@/store/goods/goodsSlice';

// import { fetchFilteredMainParamGoods } from '@/api/goodsService.js';

import filters from '@/data/filters.js';

import { menuItems } from '@/data/menuItems';

import { TriangleIcon, DEFAULT_COLOR } from './../../TriangleIcon/TriangleIcon';

import styles from './Dropdown.module.scss';

const Dropdown = ({ title, items, isOpen, toggleOpen, menuRef }) => {
	const pathname = usePathname();

	const router = useRouter();

	// const { filterMainParam, firstFilter, flag } = useSelector(
	// 	(state) => state.goods,
	// );

	const dispatch = useDispatch();

	const goodsLink = menuItems.goods.items[0].href;

	const handleLinkClick = (item) => {
		toggleOpen();

		// console.log('menuItems', menuItems.goods.items[0].href);

		if (item.href === goodsLink) {
			const filterIndex = items.findIndex((link) => link.text === item.text);
			console.log('filterIndex', filterIndex);

			const filterMainParam = Array(8).fill(0); // Заполняем массив нулями

			if (filterIndex === 0) {
				dispatch(setFirstFilter([filters[0].id]));
				dispatch(setFilterMainParam([0, 0, 0, 0, 0, 0, 0, 0]));
			} else {
				filterMainParam[filterIndex - 1] = 1; // Устанавливаем нужную цифру в массив

				router.push(goodsLink); // Перенаправляем пользователя на /goods

				// console.log('filterMainParam', filterMainParam);

				// Выполняем запрос
				dispatch(setFilterMainParam(filterMainParam));
				dispatch(setFirstFilter([]));
			}

			console.log('Запрос в handleLinkClick');
		}
	};

	const isActiveLink = items.some((item) => pathname === item.href);

	return (
		<div className={styles.dropdown} ref={menuRef}>
			<button
				className={`${styles.button} ${isOpen ? styles.buttonActive : ''}  
					${isActiveLink ? styles.buttonLinkActive : ''}
					${isActiveLink ? styles.linkActive : ''}`}
				onClick={toggleOpen}
			>
				{title}
				<TriangleIcon
					className={styles.triangle}
					color={isActiveLink ? 'var(--red)' : DEFAULT_COLOR}
					isOpen={isOpen}
				/>
			</button>
			<div
				className={`${styles.container} ${
					isOpen ? styles.containerActive : ''
				}`}
			>
				<ul className={styles.list}>
					{items.map((item, index) => (
						<li key={index}>
							<Link
								href={item.href}
								className={`${styles.link} ${
									pathname === item.href ? styles.linkActive : ''
								}`}
								onClick={() => handleLinkClick(item)}
							>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
