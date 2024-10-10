import PageTitle from './../../../components/PageTitle/PageTitle.jsx';

export default function PersonalDataProcessingPolicy() {

	const breadcrumbs = [
		{
			title: 'Главная', href: '/'
		},
		{
			title: 'Политика обработки персональных данных',
		},
	];

	return (
		<>

			<h1>Personal Data Processing Policy</h1>
			<PageTitle
				title='Политика обработки персональных данных'

				text=''
				breadcrumbs={breadcrumbs}
			></PageTitle>


		</>
	);
}
