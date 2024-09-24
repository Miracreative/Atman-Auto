'use client';

import Advantages from '@/components/applicationsPages/Advantages/Advantages.jsx';
import TitleNavigation from '@/components/applicationsPages/TitleNavigation/TitleNavigation.jsx';
import applicationData from '@/data/aplicationData';

import { useState } from 'react';




export default function Transport() {

	const { transport } = applicationData;
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNavClick = (index) => {
		setCurrentIndex(index);
	};

	return <>
		<TitleNavigation
			applicationIndustry={transport}
			currentIndex={currentIndex}
			onNavClick={handleNavClick}></TitleNavigation>
		<Advantages
			applicationIndustry={transport}
			currentIndex={currentIndex}>

		</Advantages>
	</>;
}



