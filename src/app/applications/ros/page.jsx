'use client';

import Advantages from '@/components/applicationsPages/Advantages/Advantages.jsx';
import TitleNavigation from '@/components/applicationsPages/TitleNavigation/TitleNavigation.jsx';
import applicationData from '@/data/aplicationData';

import { useState } from 'react';




export default function Ros() {

	const { ros } = applicationData;
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNavClick = (index) => {
		setCurrentIndex(index);
	};

	return <>
		<TitleNavigation
			applicationIndustry={ros}
			currentIndex={currentIndex}
			onNavClick={handleNavClick}></TitleNavigation>
		<Advantages
			applicationIndustry={ros}
			currentIndex={currentIndex}>

		</Advantages>
	</>;
}




