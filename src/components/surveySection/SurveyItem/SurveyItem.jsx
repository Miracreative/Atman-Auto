import styles from './SurveyItem.module.scss';

export default function SurveyItem({
	name,
	id,
	value,
	checked,
	onChange,
	text,
	extraText,
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
