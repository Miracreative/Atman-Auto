import { useState } from 'react';
import Link from 'next/link';

import AccordionItem from '../AccordionItem/AccordionItem';
import { menuItems } from '@/data/menuItems';

import styles from './Accordion.module.scss';

export default function Accordion() {
	const [openId, setOpenId] = useState(null);

	return (
		<ul className={styles.accordion}>
			{Object.keys(menuItems).map((key, id) => {
				const menuItem = menuItems[key];
				return (
					<AccordionItem
						onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
						isOpen={id === openId}
						key={id}
						title={menuItem.title}
						items={menuItem.items}
					/>
				);
			})}
			<li className={styles.link}>
				<Link href="/production">Производство</Link>
			</li>
			<li className={styles.link}>
				<Link href="/knowledge">База знаний</Link>
			</li>
			<li className={styles.link}>
				<Link href="/news">Новости</Link>
			</li>
		</ul>
	);
}
