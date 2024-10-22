import { forwardRef } from 'react';

import PolicyNav from '@/components/policyPages/PolicyNav/PolicyNav';
import PolicyDropButton from '@/components/policyPages/PolicyDropButton/PolicyDropButton';

import styles from './PolicyDropMenu.module.scss';

const PolicyDropMenu = forwardRef((props, ref) => {
	return (
		<div className={styles.container} ref={ref}>
			<div className={styles.dropButtonContainer}>
				<PolicyDropButton />
			</div>
			<div className={styles.navContainer}>
				<PolicyNav />
			</div>
		</div>
	);
});

export default PolicyDropMenu;
