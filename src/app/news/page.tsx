import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import NewsContent from '@/components/newsPage/NewsContent/NewsContent.jsx';

export default function News() {
	return (
		<>

			<PageTitle
				title='Новости'

				text={<div>События в отрасли <br /> и достижения компании </div>}></PageTitle>
			<NewsContent></NewsContent>

		</>
	);
}
