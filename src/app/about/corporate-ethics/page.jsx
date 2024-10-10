import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import PolicyTextContent from '@/components/policyPages/PolicyTextContent/PolicyTextContent';

export default function CorporateEthics() {

	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Кодекс корпоративной этики',
		},
	];

	return (
		<section>
			<PageTitle title={menuItems.about.items[2].text} breadcrumbs={breadcrumbs} />

			<PolicySection>
				<PolicyTextContent />
			</PolicySection>
		</section>
	);
}
