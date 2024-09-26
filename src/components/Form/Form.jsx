'use client';

import styles from './Form.module.scss';

const Form = ({ isOpen, onClose }) => {
	return (
		<div
			className={`${
				isOpen ? `${styles.visible} ${styles.container}` : styles.container
			}`}
			onClick={() => onClose(false)}
		>
			<form
				// className={`${
				// 	isOpen ? `${styles.visibleForm} ${styles.form}` : styles.container
				// }`}
				className={styles.form}
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className={styles.title}>
					Напишите <span>нам</span>
				</h2>
				<button type="button" className={styles.buttonClose} onClick={onClose}>
					X
				</button>
			</form>
		</div>
	);
};

export default Form;
