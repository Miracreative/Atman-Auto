'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import RecommendationsAfoam from '@/components/afoamPage/RecommendationsAfoam/RecommendationsAfoam.jsx';
import AfoamSlider from '@/components/afoamPage/AfoamSlider/AfoamSlider.jsx';
import DescriptionAfoam from '@/components/afoamPage/DescriptionAfoam/DescriptionAfoam.jsx';
import AdvantagesAfoam from '@/components/afoamPage/AdvantagesAfoam/AdvantagesAfoam.jsx';




export default function Afoam() {

	const [afoamData, setAfoamData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(`${process.env.HOST}/api/afoam`);
			setAfoamData(response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);



	const recommended1 = afoamData;
	// const recommended2 = afoamData.recommended2;
	// const recommended3 = afoamData.recommended3;

	const advantages1 = afoamData[0]?.advantages;
	const advantages2 = afoamData[0]?.advantages;
	const advantages3 = afoamData[0]?.advantages;


	return (
		<>

			<>
				<AfoamSlider></AfoamSlider>
				<DescriptionAfoam></DescriptionAfoam>

				<AdvantagesAfoam advantages={advantages1} ></AdvantagesAfoam>
				<RecommendationsAfoam recommended={recommended1}></RecommendationsAfoam>

				<AdvantagesAfoam advantages={advantages2} ></AdvantagesAfoam>
				<RecommendationsAfoam recommended={recommended1} ></RecommendationsAfoam>

				<AdvantagesAfoam advantages={advantages3} ></AdvantagesAfoam>
				<RecommendationsAfoam recommended={recommended1} ></RecommendationsAfoam>
			</>


		</>
	);
}
