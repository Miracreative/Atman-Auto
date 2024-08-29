import styles from './Questionnaire.module.scss';

export default function Questionnaire() {
	return (
		<div>
			<div>
				<h2>Выберите продукт, который соответствует вашим потребностям</h2>
				<p>
					Узнайте, какой тип ленты лучше всего подходит для вашего случая
					использования, ответив на несколько вопросов.
				</p>
				<div>{/* номер страницы */}</div>
			</div>
			<div>
				<h3></h3>
				<div>{/* чекбоксы */}</div>
				<div>
					<button></button>
					<button></button>
				</div>
			</div>
		</div>
	);
}
