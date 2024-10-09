import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import SoutContent from '@/components/policyPages/soutPage/SoutContent/SoutContent.tsx';

export default function Sout() {

	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Ведомости СОУТ',
		},
	];

	return (
		<section>
			<PageTitle title={menuItems.about.items[4].text} breadcrumbs={breadcrumbs} />

			<PolicySection>
				<SoutContent />
			</PolicySection>
		</section>
	);
}
