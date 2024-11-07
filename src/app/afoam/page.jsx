'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import RecommendationsAfoam from '@/components/afoamPage/RecommendationsAfoam/RecommendationsAfoam.jsx';
import AfoamSlider from '@/components/afoamPage/AfoamSlider/AfoamSlider.jsx';
import DescriptionAfoam from '@/components/afoamPage/DescriptionAfoam/DescriptionAfoam.jsx';
import AdvantagesAfoam from '@/components/afoamPage/AdvantagesAfoam/AdvantagesAfoam.jsx';

import afoamData from '@/data/afoamData.js';

import {HOST} from '@/constants/url.js';


export default function Afoam() {

	const [afoamData, setAfoamData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(`${HOST}/api/afoam`);
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

	// console.log(afoamData);


	const recommended1 = afoamData;
	// const recommended2 = afoamData.recommended2;
	// const recommended3 = afoamData.recommended3;

	const advantages1 = afoamData[0]?.advantages;
	const advantages2 = afoamData[0]?.advantages;
	const advantages3 = afoamData[0]?.advantages;


	// console.log(recommended1);


	// const recommended1 = afoamData.recommended1;
	// const recommended2 = afoamData.recommended2;
	// const recommended3 = afoamData.recommended3;

	// const advantages1 = afoamData.advantages1;
	// const advantages2 = afoamData.advantages2;
	// const advantages3 = afoamData.advantages3;




	// const breadcrumbs = [
	// 	{
	// 		title: 'Главная', href: '/'
	// 	},
	// 	{
	// 		title: 'Afoam',
	// 	},
	// ];




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
