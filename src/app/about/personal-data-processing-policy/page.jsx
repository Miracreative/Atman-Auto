'use client';

import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle.jsx';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import PolicyTextContent from '@/components/policyPages/PolicyTextContent/PolicyTextContent';
import useSaveScrollPosition from '@/hooks/useSaveScrollPosition.js';
// import ScrollLogger from '@/hooks/ScrollLogger.js';
import ScrollLogger from '@/components/ScrollLogger/ScrollLogger.tsx';

import { useRouter } from 'next/router';

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

	// const router = useRouter();
	// useSaveScrollPosition();

	return (
		<section>
			<ScrollLogger />
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
