import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import { TriangleIcon, DEFAULT_COLOR } from './../../TriangleIcon/TriangleIcon';

import styles from './AccordionItem.module.scss';

export default function AccordionItem({
	onClick,
	isOpen,
	title,
	items,
	setActive,
	isActiveLink,
}) {
	const itemRef = useRef(null);

	const pathname = usePathname();

	return (
		<li className={styles.accordionItem}>
			<button
				className={`${
					isOpen
						? `${styles.active} ${styles.accordionHeader}`
						: styles.accordionHeader
				} ${isActiveLink ? styles.buttonLinkActive : ''}`}
				onClick={() => onClick()}
			>
				{title}
				<TriangleIcon
					className={styles.accordionArrow}
					color={isActiveLink ? 'var(--red)' : DEFAULT_COLOR}
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
									className={`${styles.link} ${
										pathname === item.href && index === 0
											? styles.linkActive
											: ''
									}`}
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
