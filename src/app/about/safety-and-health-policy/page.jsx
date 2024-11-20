'use client';

import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import SoutContent from '@/components/policyPages/soutPage/SoutContent/SoutContent.tsx';
import useSaveScrollPosition from '@/hooks/useSaveScrollPosition.js';
// import ScrollLogger from '@/hooks/ScrollLogger.js';
import ScrollLogger from '@/components/ScrollLogger/ScrollLogger.tsx';

import { useRouter } from 'next/router';


export default function SafetyAndHealthPolicy() {
	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Политика в области охраны труда',
		},
	];

	// const router = useRouter();
	// useSaveScrollPosition();

	return (
		<section>
			<ScrollLogger />
			<PageTitle title={menuItems.about.items[3].text} breadcrumbs={breadcrumbs} />

			<PolicySection>
				<SoutContent />
			</PolicySection>
		</section>
	);
}
