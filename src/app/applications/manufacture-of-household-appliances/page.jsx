
'use client';

import Advantages from '@/components/applicationsPages/Advantages/Advantages.jsx';
import TitleNavigation from '@/components/applicationsPages/TitleNavigation/TitleNavigation.jsx';
import applicationData from '@/data/aplicationData';

import { useState } from 'react';




export default function ManufactureOfHouseholdAppliances() {

	const { householdAppliances } = applicationData;
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNavClick = (index) => {
		setCurrentIndex(index);
	};

	return <>
		<TitleNavigation
			applicationIndustry={householdAppliances}
			currentIndex={currentIndex}
			onNavClick={handleNavClick}></TitleNavigation>
		<Advantages
			applicationIndustry={householdAppliances}
			currentIndex={currentIndex}>

		</Advantages>
	</>;
}
