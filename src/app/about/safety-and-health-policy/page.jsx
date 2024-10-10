import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import SoutContent from '@/components/policyPages/soutPage/SoutContent/SoutContent.tsx';



export default function SafetyAndHealthPolicy() {
	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Политика в области охраны труда',
		},
	];

	return (
		<section>
			<PageTitle title={menuItems.about.items[3].text} breadcrumbs={breadcrumbs} />

			<PolicySection>
				<SoutContent />
			</PolicySection>
		</section>
	);
}
