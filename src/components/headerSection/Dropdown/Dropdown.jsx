'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useSelector, useDispatch } from 'react-redux';

import {
	getAllGoods,
	getFilteredMainParamGoods,
	setFilterMainParam,
} from '@/store/goods/goodsSlice.js';

import { fetchFilteredMainParamGoods } from '@/api/goodsService.js';

import { TriangleIcon, DEFAULT_COLOR } from './../../TriangleIcon/TriangleIcon';

import styles from './Dropdown.module.scss';

const Dropdown = ({
	title,
	items,
	isOpen,
	toggleOpen,
	menuRef,
	// setFilterMainParam,
}) => {
	const pathname = usePathname();

	const router = useRouter();

	const { filterMainParam } = useSelector((state) => state.goods);

	const dispatch = useDispatch();

	const handleLinkClick = (item) => {
		if (item.href === '/goods') {
			const filterIndex = items.findIndex((link) => link.text === item.text);
			const filterMainParam = Array(8).fill(0);
			filterMainParam[filterIndex] = 1; // Устанавливаем нужную цифру в массив

			// Перенаправляем пользователя на /goods
			router.push('/goods');

			// Выполняем запрос
			// await fetchFilteredMainParamGoods(filterMainParam);
			dispatch(setFilterMainParam(filterMainParam));

			// dispatch(setFilterMainParam([0, 0, 0, 0, 0, 0, 0, 0]));

			////////////////////////////////////////////////////////////////////////////////////////////////////////////
			////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// TODO: Придётся прокинуть состояние первого фильтра в store :(
			////////////////////////////////////////////////////////////////////////////////////////////////////////////
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			console.log('Запрос в handleLinkClick');
		}
		//  else {
		// 	router.push(item.href);
		// }

		toggleOpen(); // Закрываем dropdown
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
								// onClick={toggleOpen}
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
