import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import NewsWrapContent from '@/components/newsPage/NewsWrapContent/NewsWrapContent.jsx';

export default function News() {

	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Новости',
		},
	];
	return (
		<>

			<PageTitle
				title='Новости'
				text={<div>События в отрасли <br /> и достижения компании </div>}
				breadcrumbs={breadcrumbs}
			>
			</PageTitle>

			<NewsWrapContent></NewsWrapContent>

		</>
	);
}
