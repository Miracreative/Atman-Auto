'use client'

// import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import RecommendationsAfoam from '@/components/afoamPage/RecommendationsAfoam/RecommendationsAfoam.jsx';
import AfoamSlider from '@/components/afoamPage/AfoamSlider/AfoamSlider.jsx';
import DescriptionAfoam from '@/components/afoamPage/DescriptionAfoam/DescriptionAfoam.jsx';
import AdvantagesAfoam from '@/components/afoamPage/AdvantagesAfoam/AdvantagesAfoam.jsx';


export default function Afoam() {

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
			<AfoamSlider></AfoamSlider>
			<DescriptionAfoam></DescriptionAfoam>

			{/* <AdvantagesAfoam></AdvantagesAfoam> */}
			<RecommendationsAfoam></RecommendationsAfoam>

			{/* <AdvantagesAfoam></AdvantagesAfoam> */}
			<RecommendationsAfoam></RecommendationsAfoam>

			{/* <AdvantagesAfoam></AdvantagesAfoam> */}
			<RecommendationsAfoam></RecommendationsAfoam>


		</>
	);
}
