import styles from './FormInput.module.scss';

const FormInput = ({
	id,
	label,
	type,
	placeholder,
	register,
	validations,
	errors,
}) => {
	const inputClass = errors[id]
		? `${styles.input} ${styles.errorInput}`
		: styles.input;

	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			{type === 'textarea' ? (
				<textarea
					id={id}
					{...register(id, validations)}
					className={inputClass}
					placeholder={placeholder}
				/>
			) : (
				<input
					id={id}
					{...register(id, validations)}
					className={inputClass}
					type={type}
					placeholder={placeholder}
				/>
			)}
			<p className={styles.error}>
				{errors[id]?.message ? errors[id].message : ''}
			</p>
		</div>
	);
};

export default FormInput;
