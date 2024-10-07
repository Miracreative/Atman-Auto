import PolicyNavPanel from '../PolicyNavPanel/PolicyNavPanel';
import PolicyTextContent from '@/components/policyPages/PolicyTextContent/PolicyTextContent';

import styles from './PolicySection.module.scss';
import { Children } from 'react';

const PolicySection = ({ children }) => {
	return (
		<section className={styles.section}>
			<PolicyNavPanel />

			{/* {Children} */}
			<div>{children}</div>
		</section>
	);
};

export default PolicySection;
