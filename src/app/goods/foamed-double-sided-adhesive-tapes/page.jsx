'use client';

import { useRouter } from 'next/navigation';

import { menuItems } from '@/data/menuItems';

import styles from './FoamedDoubleSidedAdhesiveTapes.module.scss';

export default function FoamedDoubleSidedAdhesiveTapes() {
	const router = useRouter();

	// const goodsFilterLink = menuItems.goods.items[1].href;

	router.push('/goods');
	// router.push(goodsFilterLink);
	// const handleButtonClick = () => {
	// };

	return <div className={styles.container}>LOADING...</div>;
}
