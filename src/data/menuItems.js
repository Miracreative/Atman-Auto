export const menuItems = {
	home: {
		title: 'Главная',
		items: [{ href: '/', text: 'Главная' }],
	},
	about: {
		title: 'О нас',
		items: [
			{ href: '/about', text: 'О нас' },
			{ href: '/about/quality-policy', text: 'Политика в области качества' },
			{ href: '/about/corporate-ethics', text: 'Кодекс корпоративной этики' },
			{
				href: '/about/safety-and-health-policy',
				text: 'Политика в области охраны труда',
			},
			{ href: '/about/sout', text: 'Ведомости по СОУТ' },
			{
				href: '/about/personal-data-processing-policy',
				text: 'Политика обработки персональных данных',
			},
		],
	},
	applications: {
		title: 'Применения',
		items: [
			{
				href: '/applications',
				text: 'Применения',
			},
			{
				href: '/applications/automobile-industry',
				text: 'Автомобильная промышленность',
			},
			{
				href: '/applications/manufacture-of-household-appliances',
				text: 'Производство бытовой техники',
			},
			{
				href: '/applications/furniture-industry',
				text: 'Мебельная промышленность',
			},
			{
				href: '/applications/electronics-manufacturing',
				text: 'Производство электроники',
			},
			{
				href: '/applications/construction-and-renovation',
				text: 'Строительство и ремонт',
			},
			{ href: '/applications/transport', text: 'Транспорт' },
			{ href: '/applications/ros', text: 'РОС' },
		],
	},
	goods: {
		title: 'Товары',
		items: [
			{
				href: '/goods',
				text: 'Товары',
			},
			{
				href: '/goods/foamed-double-sided-adhesive-tapes',
				text: 'Вспененные двусторонние клейкие ленты',
			},
			{
				href: '/goods/thin-double-sided-adhesive-tapes',
				text: 'Тонкие двусторонние клейкие ленты',
			},
			{
				href: '/goods/single-sided-adhesive-tapes',
				text: 'Односторонние клейкие ленты',
			},
			{ href: '/goods/primers-and-cleaners', text: 'Праймеры и очистители' },
			{ href: '/goods/tapes', text: 'Пленки' },
			{ href: '/goods/tools', text: 'Инструменты' },
			{ href: '/goods/rubbers', text: 'Резины' },
		],
	},
};

export const dropdownItems = [
	{ key: 'about', title: menuItems.about.title, items: menuItems.about.items },
	{
		key: 'applications',
		title: menuItems.applications.title,
		items: menuItems.applications.items,
	},
	{ key: 'goods', title: menuItems.goods.title, items: menuItems.goods.items },
];
