'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';

import {
	setFilterMainParamGoods,
	setFirstFilter,
	getAllGoods,
	getFilteredMainParamGoods,
} from '@/store/goods/goodsSlice';

import filters from '@/data/filters.js';
import { menuItems } from '@/data/menuItems';

import { TriangleIcon, DEFAULT_COLOR } from './../../TriangleIcon/TriangleIcon';

import styles from './Dropdown.module.scss';

const Dropdown = ({
	title,
	items,
	isActiveLink,
	isOpen,
	toggleOpen,
	menuRef,
}) => {
	const pathname = usePathname();
	const router = useRouter();
	const dispatch = useDispatch();

	const goodsLink = menuItems.goods.items[0].href;

	const handleLinkClick = (item) => {
		toggleOpen();

		if (item.href === goodsLink) {
			const filterIndex = items.findIndex((link) => link.text === item.text);

			const filterMainParam = Array(8).fill(0); // Заполняем массив нулями

			if (filterIndex === 0) {
				dispatch(setFirstFilter([filters[0].id]));
				dispatch(setFilterMainParamGoods([0, 0, 0, 0, 0, 0, 0, 0]));
				dispatch(getAllGoods());
			} else {
				filterMainParam[filterIndex - 1] = 1; // Устанавливаем нужную цифру в массив, начиная со второго элемента

				router.push(goodsLink);

				// Выполняем запрос
				dispatch(setFilterMainParamGoods(filterMainParam));
				dispatch(setFirstFilter([]));
				dispatch(getFilteredMainParamGoods(filterMainParam));
			}
		}
	};

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
					color={
						isOpen ? 'var(--red)' : isActiveLink ? 'var(--red)' : DEFAULT_COLOR
					}
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
									pathname === item.href && index === 0 ? styles.linkActive : ''
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
