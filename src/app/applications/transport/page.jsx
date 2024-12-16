'use client';

import TitleNavigation from '@/components/applicationsPages/TitleNavigation/TitleNavigation.jsx';
import SliderAplications from '@/components/applicationsPages/SliderAplications/SliderAplications.jsx';
import Advantages from '@/components/applicationsPages/Advantages/Advantages.jsx';
import Recommendations from '@/components/applicationsPages/Recommendations/Recommendations.jsx';


import applicationData from '@/data/aplicationData';

import { useState } from 'react';




export default function Transport() {

	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Применения',
			href: '/applications', 
		},
		{
			title: 'Транспорт',
		},
	];

	const { transport } = applicationData;
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNavClick = (index) => {
		setCurrentIndex(index);
	};

	return <>
		<TitleNavigation
			applicationIndustry={transport}
			currentIndex={currentIndex}
			onNavClick={handleNavClick}
			breadcrumbs={breadcrumbs}
		>

		</TitleNavigation>

		<SliderAplications
			applicationIndustry={transport}
			currentIndex={currentIndex}>

		</SliderAplications>

		<Advantages
			applicationIndustry={transport}
			currentIndex={currentIndex}>

		</Advantages>
		<Recommendations
			requestAddress={'/api/goods-recommend/0,0,0,0,0,1,0'}
		></Recommendations>
	</>;
}



