'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';

import {
	setFilterMainParam,
	setFirstFilter,
	getAllGoods,
	getFilteredMainParamGoods,
} from '@/store/goods/goodsSlice';

import filters from '@/data/filters.js';

import { menuItems } from '@/data/menuItems';

import { TriangleIcon, DEFAULT_COLOR } from './../../TriangleIcon/TriangleIcon';

import styles from './Dropdown.module.scss';

const Dropdown = ({ title, items, isOpen, toggleOpen, menuRef }) => {
	const pathname = usePathname();
	const router = useRouter();
	const dispatch = useDispatch();

	const goodsLink = menuItems.goods.items[0].href;

	const handleLinkClick = (item) => {
		toggleOpen();

		if (item.href === goodsLink) {
			const filterIndex = items.findIndex((link) => link.text === item.text);
			// console.log('filterIndex', filterIndex);

			const filterMainParam = Array(8).fill(0); // Заполняем массив нулями

			if (filterIndex === 0) {
				dispatch(setFirstFilter([filters[0].id]));
				dispatch(setFilterMainParam([0, 0, 0, 0, 0, 0, 0, 0]));
				dispatch(getAllGoods());
			} else {
				filterMainParam[filterIndex - 1] = 1; // Устанавливаем нужную цифру в массив, начиная со второго элемента

				router.push(goodsLink); // Перенаправляем пользователя на /goods

				// Выполняем запрос
				dispatch(setFilterMainParam(filterMainParam));
				dispatch(setFirstFilter([]));
				dispatch(getFilteredMainParamGoods(filterMainParam));
			}

			// console.log('Запрос в handleLinkClick');
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
