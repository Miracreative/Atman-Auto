'use client';

import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import KnowledgeContent from './../../components/KnowledgeContent/KnowledgeContent.jsx';
import PopupKnowledge from './../../components/PopupKnowledge/PopupKnowledge.jsx';


export default function Knowledge() {

	return (

		<div className='relative'>
			<PageTitle
				title={<div>База <span>знаний</span></div>}

				text={<div>Наш опыт для вашей <br /> эффективности</div>}></PageTitle>

			<KnowledgeContent ></KnowledgeContent>
			{/* // <PopupKnowledge></PopupKnowledge> */}
		</div>


	);
}