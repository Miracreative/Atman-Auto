import styles from './SurveyItem.module.scss';

export default function SurveyItem({
	id,
	name,
	value,
	text,
	extraText,
	checked,
	onChange,
}) {
	return (
		<li className={styles.option}>
			<input
				type="radio"
				name={name}
				id={id}
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={id}>
				{text}
				<br />
				<span>{extraText}</span>
			</label>
		</li>
	);
}
