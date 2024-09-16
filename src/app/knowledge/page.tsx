'use client';

import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import KnowledgeContent from './../../components/KnowledgeContent/KnowledgeContent.jsx';
import { useSearchParams } from 'next/navigation';

export default function Knowledge() {
	const searchParams = useSearchParams();
	return (
		<>

			<PageTitle
				title={<div>База <span>знаний</span></div>}

				text={<div>Наш опыт для вашей <br /> эффективности</div>}></PageTitle>

			<KnowledgeContent ></KnowledgeContent>
		</>
	);
}