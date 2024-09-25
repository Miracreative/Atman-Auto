type ProductsData = {
	id: number; // Уникальный идентификатор продукта
	parameter: number[];
	mainParameter: number[];
	name: string; // Название продукта
	description?: string; // Описание продукта, которое содержит информацию о его характеристиках
	imageURL?: string[]; // Массив URL-адресов изображений продукта
	brand: string; // Бренд продукта
	type: string; // Тип продукта
	size: string; // Размер продукта
	article: string; // Артикул товара
	thickness: string; // Толщина продукта
	base: string; // Материал основы продукта
	typeGlue: string; // Тип клея
	color: string; // Цвет продукта
	linerType: string; // Тип лайнера
	heatResistance: string; // Температурный диапазон, который продукт может выдерживать
	advantages: string[]; // Массив преимуществ продукта, который может быть полезен для потенциальных клиентов
	pdfUrl?: string; // URL на PDF-документ, который содержит дополнительную информацию о продукте; необязательное поле
};

type ProductPageProps = {
	params: {
		id: string;
	};
};

export type { ProductsData, ProductPageProps };
