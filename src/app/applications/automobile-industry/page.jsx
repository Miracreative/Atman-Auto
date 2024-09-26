'use client';


import TitleNavigation from '@/components/applicationsPages/TitleNavigation/TitleNavigation.jsx';
import SliderAplications from '@/components/applicationsPages/SliderAplications/SliderAplications.jsx';
import Advantages from '@/components/applicationsPages/Advantages/Advantages.jsx';
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
			onNavClick={handleNavClick}>

		</TitleNavigation>

		<SliderAplications
			applicationIndustry={automobileIndustry}
			currentIndex={currentIndex}>

		</SliderAplications>

		<Advantages
			applicationIndustry={automobileIndustry}
			currentIndex={currentIndex}>

		</Advantages>
		<Recommendations></Recommendations>
	</>;
}
