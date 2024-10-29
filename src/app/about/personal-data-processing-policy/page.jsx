import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle.jsx';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import PolicyTextContent from '@/components/policyPages/PolicyTextContent/PolicyTextContent';

export default function PersonalDataProcessingPolicy() {
	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'Политика обработки персональных данных',
		},
	];

	return (
		<section>
			<PageTitle
				title={menuItems.about.items[5].text}
				breadcrumbs={breadcrumbs}
			/>

			<PolicySection>
				<PolicyTextContent />
			</PolicySection>
		</section>
	);
}
