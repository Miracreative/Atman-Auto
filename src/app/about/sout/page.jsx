import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import SoutContent from '@/components/policyPages/soutPage/SoutContent/SoutContent.tsx';

export default function Sout() {
	return (
		<section>
			<PageTitle title={menuItems.about.items[4].text} />

			<PolicySection>
				<SoutContent />
			</PolicySection>
		</section>
	);
}
