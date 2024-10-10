import PageTitle from '@/components/PageTitle/PageTitle.jsx';
import ApplicationsContent from '@/components/ApplicationsContent/ApplicationsContent.jsx';

export default function Applications() {

	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Применения',
		},
	];
	return (
		<>
			<PageTitle
				title='Применения'

				text='Применение клейких лент и самоклеящихся материалов для решения задач ограничивается только вашей фантазией.'
				breadcrumbs={breadcrumbs}
			></PageTitle>

			<ApplicationsContent></ApplicationsContent>
		</>
	);
}

