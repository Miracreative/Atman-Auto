import { forwardRef } from 'react';

import QualityNav from '@/components/qualityPage/QualityNav/QualityNav';
import PolicyDropButton from '@/components/qualityPage/PolicyDropButton/PolicyDropButton';

import styles from './PolicyDropMenu.module.scss';

const PolicyDropMenu = forwardRef(({ isOpenNav, setIsOpenNav }, ref) => {
	return (
		<div className={styles.container} ref={ref}>
			<div className={styles.dropButtonContainer}>
				<PolicyDropButton isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
			</div>
			<div className={styles.navContainer}>
				<QualityNav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
			</div>
		</div>
	);
});

export default PolicyDropMenu;
