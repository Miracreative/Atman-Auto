import PolicyNavPanel from '@/components/policyPages/PolicyNavPanel/PolicyNavPanel';
import SoutContent from '@/components/policyPages/soutPage/SoutContent/SoutContent';

import styles from './SoutSection.module.scss';

const SoutSection = () => {
	return (
		<section className={styles.section}>
			<PolicyNavPanel />
			<SoutContent />
		</section>
	);
};

export default SoutSection;
