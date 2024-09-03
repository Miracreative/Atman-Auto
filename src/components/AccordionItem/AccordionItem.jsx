import React, { useRef } from 'react';
import Link from 'next/link';

import TriangleIcon from '../TriangleIcon/TriangleIcon';

import styles from './AccordionItem.module.scss';

export default function AccordionItem({
	onClick,
	isOpen,
	title,
	items,
	setActive,
}) {
	const itemRef = useRef(null);

	return (
		<li className={styles.accordionItem}>
			<button
				className={
					isOpen
						? `${styles.active} ${styles.accordionHeader}`
						: styles.accordionHeader
				}
				onClick={() => onClick()}
			>
				{title}
				<TriangleIcon
					className={styles.accordionArrow}
					color={isOpen ? 'var(--red)' : undefined}
					isOpen={isOpen}
				/>
			</button>
			<div
				className={styles.accordionCollapse}
				style={
					isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
				}
			>
				<div className={styles.accordionBody} ref={itemRef}>
					<ul className={styles.list}>
						{items.map((item, index) => (
							<li key={index}>
								<Link
									href={item.href}
									className={styles.link}
									onClick={() => setActive(false)}
								>
									{item.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</li>
	);
}
