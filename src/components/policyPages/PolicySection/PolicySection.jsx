import PolicyNavPanel from '../PolicyNavPanel/PolicyNavPanel';

import styles from './PolicySection.module.scss';

const PolicySection = ({ children }) => {
	return (
		<section className={styles.section}>
			<PolicyNavPanel />

			<div className={styles.children}>{children}</div>
		</section>
	);
};

export default PolicySection;
