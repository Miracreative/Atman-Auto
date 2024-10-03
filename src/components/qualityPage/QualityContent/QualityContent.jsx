import styles from './QualityContent.module.scss';

const QualityContent = () => {
	return (
		<div className={styles.qualityContent}>
			<h2>1. Общие положения.</h2>
			<p className={styles.text}>
				Настоящая политика обработки персональных данных составлена в
				соответствии с требованиями Федерального закона от 27.07.2006 №152-ФЗ «О
				персональных данных» (далее - Закон о персональных данных) и определяет
				порядок обработки персональных данных и меры по обеспечению безопасности
				персональных данных, предпринимаемые ООО "Атман-АВТО" (далее –
				Оператор).
			</p>
			<p className={styles.text}>
				1.1. Оператор ставит своей важнейшей целью и условием осуществления
				своей деятельности соблюдение прав и свобод человека и гражданина при
				обработке его персональных данных, в том числе защиты прав на
				неприкосновенность частной жизни, личную и семейную тайну.
			</p>
			<p className={styles.text}>
				1.2. Настоящая политика Оператора в отношении обработки персональных
				данных (далее – Политика) применяется ко всей информации, которую
				Оператор может получить о посетителях
				веб-сайта https://www.atman-auto.ru.
			</p>
		</div>
	);
};

export default QualityContent;
