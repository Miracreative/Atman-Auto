'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.scss';

const Dropdown = forwardRef(({ title, items, isOpen, toggleOpen }, ref) => {
	return (
		<div className={styles.dropdown} ref={ref}>
			<button
				className={`${styles.button} ${isOpen ? styles.buttonActive : ''}`}
				onClick={toggleOpen}
			>
				{title}
				<svg
					width="11"
					height="9"
					viewBox="0 0 11 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={styles.triangle}
				>
					<path
						d="M6.37622 8.40688C5.99629 9.09766 5.00371 9.09766 4.62378 8.40688L0.815055 1.48192C0.448506 0.815466 0.930668 9.12994e-07 1.69127 8.79746e-07L9.30873 5.46777e-07C10.0693 5.1353e-07 10.5515 0.815466 10.1849 1.48192L6.37622 8.40688Z"
						fill="#353535"
					/>
				</svg>
			</button>
			<div
				className={`${styles.сontainer} ${
					isOpen ? styles.сontainerActive : ''
				}`}
			>
				<ul className={styles.list}>
					{items.map((item, index) => (
						<li key={index}>
							<Link href={item.href} className={styles.link}>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
});

export default Dropdown;