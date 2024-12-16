'use client';

import TitleNavigation from '@/components/applicationsPages/TitleNavigation/TitleNavigation.jsx';
import SliderAplications from '@/components/applicationsPages/SliderAplications/SliderAplications.jsx';
import Advantages from '@/components/applicationsPages/Advantages/Advantages.jsx';
import Recommendations from '@/components/applicationsPages/Recommendations/Recommendations.jsx';

import applicationData from '@/data/aplicationData';

import { useState } from 'react';




export default function ConstructionAndRenovation() {

	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Применения',
			href: '/applications',
		},
		{
			title: 'Строительство и ремонт',
		}
	];

	const { construction } = applicationData;
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNavClick = (index) => {
		setCurrentIndex(index);
	};

	return <>
		<TitleNavigation
			applicationIndustry={construction}
			currentIndex={currentIndex}
			onNavClick={handleNavClick}
			breadcrumbs={breadcrumbs}
		>

		</TitleNavigation>

		<SliderAplications
			applicationIndustry={construction}
			currentIndex={currentIndex}>

		</SliderAplications>

		<Advantages
			applicationIndustry={construction}
			currentIndex={currentIndex}>

		</Advantages>
		<Recommendations
			requestAddress={'/api/goods-recommend/0,0,0,0,1,0,0'}
			></Recommendations>
	</>;
}


