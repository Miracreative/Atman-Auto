import styles from './FormInput.module.scss';

const FormInput = ({ type, text }) => {
	return (
		<div className={styles.inputContainer}>
			<p>{text}</p>
			<input className={styles.input} type={type} placeholder={text} />
		</div>
	);
};

export default FormInput;
