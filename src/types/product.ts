type ProductsData = {
	id: number; // Уникальный идентификатор продукта
	imageURL?: string[]; // Массив URL-адресов изображений продукта
	material: string; // Материал продукта
	goodsPersonalImages?: string[]; // Массив URL-адресов изображений продукта для пользователей
	goodsIndustrialImages?: string[]; // Массив URL-адресов изображений продукта для промышленности
	parameter: number[]; // Массив для фильтрации по свойствам продукта
	mainParameter: number[]; // Массив для фильтрации по типу продукта
	article: string; // Артикул товара
	advantages: string[]; // Массив преимуществ продукта, который может быть полезен для потенциальных клиентов
	thickness: string; // Толщина продукта
	volume: string; // Объем продукта
	pcs: string; // Количество в упаковке/штуках
	baseType?: string; // Материал основы продукта
	color: string; // Цвет продукта
	heatResistance: string; // Температурный диапазон, который продукт может выдерживать
	name: string; // Название продукта
	description?: string; // Описание продукта, которое содержит информацию о его характеристиках
	type: string; // Тип продукта
	size: string; // Размер продукта
	brand?: string; // Бренд продукта
	linerType?: string; // Тип лайнера
	pdfUrl?: string; // URL на PDF-документ, который содержит дополнительную информацию о продукте; необязательное поле
	dencity?: string; // Плотность продукта
	typeGlue?: string; // Тип клея
};

type ProductPageProps = {
	params: {
		id: string;
	};
};

export type { ProductsData, ProductPageProps };
