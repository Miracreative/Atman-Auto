import PageTitleProduction from '@/components/productionPage/PageTitleProduction/PageTitleProduction.jsx';
import ProductionContent from '@/components/productionPage/ProductionContent/ProductionContent.jsx';


export default function Production() {
	return (
		<>

			<PageTitleProduction
				title={<div>Производственные  <span>возможности</span></div>}

				text='Адаптация клейких лент и самоклеящихся материалов для вашего производства - это наша работа'></PageTitleProduction>

			<ProductionContent></ProductionContent>

		</>
	);
}