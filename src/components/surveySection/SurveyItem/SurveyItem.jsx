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
		<div className={styles.item}>
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
		</div>
	);
}
