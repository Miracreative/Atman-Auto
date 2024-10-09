import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import NewsWrapContent from '@/components/newsPage/NewsWrapContent/NewsWrapContent.jsx';

export default function News() {
	return (
		<>

			<PageTitle
				title='Новости'
				text={<div>События в отрасли <br /> и достижения компании </div>}>
			</PageTitle>

			<NewsWrapContent></NewsWrapContent>

		</>
	);
}
