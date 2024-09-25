'use client';

import Advantages from '@/components/applicationsPages/Advantages/Advantages.jsx';
import TitleNavigation from '@/components/applicationsPages/TitleNavigation/TitleNavigation.jsx';
import Recommendations from '@/components/applicationsPages/Recommendations/Recommendations.jsx';

import applicationData from '@/data/aplicationData';

import { useState } from 'react';




export default function AutomobileIndustry() {

	const { automobileIndustry } = applicationData;
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNavClick = (index) => {
		setCurrentIndex(index);
	};

	return <>
		<TitleNavigation
			applicationIndustry={automobileIndustry}
			currentIndex={currentIndex}
			onNavClick={handleNavClick}></TitleNavigation>
		<Advantages
			applicationIndustry={automobileIndustry}
			currentIndex={currentIndex}>

		</Advantages>
		<Recommendations></Recommendations>
	</>;
}
