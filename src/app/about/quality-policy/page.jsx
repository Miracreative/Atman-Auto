import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import PolicyTextContent from '@/components/policyPages/PolicyTextContent/PolicyTextContent';

export default function QualityPolicy() {

	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Политика в области качества',
		},
	];

	return (
		<section>
			<PageTitle title={menuItems.about.items[1].text} breadcrumbs={breadcrumbs} />

			<PolicySection>
				<PolicyTextContent />
			</PolicySection>
		</section>
	);
}
