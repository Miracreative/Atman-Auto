import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import PolicyTextContent from '@/components/policyPages/PolicyTextContent/PolicyTextContent';

export default function QualityPolicy() {
	return (
		<section>
			<PageTitle title={menuItems.about.items[1].text} />

			<PolicySection>
				<PolicyTextContent />
			</PolicySection>
		</section>
	);
}
