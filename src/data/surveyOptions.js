const tasks = [
	{
		id: 'task-1',
		name: 'tasks',
		value: 'task-1',
		text: 'Соединение деталей/материалов',
		extraText: '',
	},
	{
		id: 'task-2',
		name: 'tasks',
		value: 'task-2',
		text: 'Ламинация материалов',
		extraText: '',
	},
	{
		id: 'task-3',
		name: 'tasks',
		value: 'task-3',
		text: 'Крепление прокладок и уплотнителей',
		extraText: '',
	},
	{
		id: 'task-4',
		name: 'tasks',
		value: 'task-4',
		text: 'Создание разъемного соединения',
		extraText: '',
	},
	{
		id: 'task-5',
		name: 'tasks',
		value: 'task-5',
		text: 'Герметизация соединения',
		extraText: '',
	},
	{
		id: 'task-6',
		name: 'tasks',
		value: 'task-6',
		text: 'Защита поверхности',
		extraText: '',
	},
	{
		id: 'task-7',
		name: 'tasks',
		value: 'task-7',
		text: 'Подготовка поверхности для склеивания',
		extraText: '',
	},
	{
		id: 'task-8',
		name: 'tasks',
		value: 'task-8',
		text: 'Прочее',
		extraText: '',
	},
];

const types1 = [
	{
		id: 'type-1-1',
		name: 'types-1',
		value: 'type-1-1',
		text: 'Неокрашенные металлы, стекло',
		extraText: '(Материалы с высокой поверхностной энергией)',
	},
	{
		id: 'type-1-2',
		name: 'types-1',
		value: 'type-1-2',
		text: 'АВС, Акрил, ПЭТ',
		extraText: '(Материалы с средней поверхностной энергией)',
	},
	{
		id: 'type-1-3',
		name: 'types-1',
		value: 'type-1-3',
		text: 'Полипропилен, EPDM Порошковое покрытие',
		extraText: '(Материалы с низкой поверхностной энергией)',
	},
];

const types2 = [
	{
		id: 'type-2-1',
		name: 'types-2',
		value: 'type-2-1',
		text: types1[0].text,
		extraText: types1[0].extraText,
	},
	{
		id: 'type-2-2',
		name: 'types-2',
		value: 'type-2-2',
		text: types1[1].text,
		extraText: types1[1].extraText,
	},
	{
		id: 'type-2-3',
		name: 'types-2',
		value: 'type-2-3',
		text: types1[2].text,
		extraText: types1[2].extraText,
	},
];

const connections = [
	{
		id: 'connection-1',
		name: 'connections',
		value: 'connection-1',
		text: 'Внутри помещения',
		extraText: '',
	},
	{
		id: 'connection-2',
		name: 'connections',
		value: 'connection-2',
		text: 'Вне помещения',
		extraText: '',
	},
	{
		id: 'connection-3',
		name: 'connections',
		value: 'connection-3',
		text: 'Взаимодействие с хим.реагентами, маслами и автохимией',
		extraText: '',
	},
	{
		id: 'connection-4',
		name: 'connections',
		value: 'connection-4',
		text: 'Наличие контакта с водой',
		extraText: '',
	},
	{
		id: 'connection-5',
		name: 'connections',
		value: 'connection-5',
		text: 'Наличие вибрации',
		extraText: '',
	},
];

const temperatures = [
	{
		id: 'temperature-1',
		name: 'temperatures',
		value: 'temperature-1',
		text: 'от -40 до 70 С',
		extraText: '',
	},
	{
		id: 'temperature-2',
		name: 'temperatures',
		value: 'temperature-2',
		text: 'от -40 до 90 С',
		extraText: '',
	},
	{
		id: 'temperature-3',
		name: 'temperatures',
		value: 'temperature-3',
		text: 'от -40 до 120 С',
		extraText: '',
	},
	{
		id: 'temperature-4',
		name: 'temperatures',
		value: 'temperature-4',
		text: 'от -40 до 150 С',
		extraText: '',
	},
];

const conditions = [
	{
		id: 'condition-1',
		name: 'conditions',
		value: 'condition-1',
		text: 'Поверхности двух материалов гладкие',
		extraText: '',
	},
	{
		id: 'condition-2',
		name: 'conditions',
		value: 'condition-2',
		text: 'Одна из поверхностей шероховатая',
		extraText: '',
	},
	{
		id: 'condition-3',
		name: 'conditions',
		value: 'condition-3',
		text: 'Обе поверхности шероховатые',
		extraText: '',
	},
	{
		id: 'condition-4',
		name: 'conditions',
		value: 'condition-4',
		text: 'Поверхности с плохим сопряжением',
		extraText: '',
	},
];

export { tasks, types1, types2, connections, temperatures, conditions };
