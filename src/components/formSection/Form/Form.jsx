'use client';

import { useState } from 'react';
import Image from 'next/image.js';

import FormInput from '../FormInput/FormInput.jsx';

import attachmentIcon from '../../../../public/attachment-icon.svg';

import styles from './Form.module.scss';

const Form = ({ isOpen, onClose }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div
			className={`${
				isOpen ? `${styles.visible} ${styles.container}` : styles.container
			}`}
			onClick={() => onClose(false)}
		>
			<form className={styles.form} onClick={(e) => e.stopPropagation()}>
				<button type="button" className={styles.buttonClose} onClick={onClose}>
					<span></span>
					<span></span>
				</button>
				<h2 className={styles.title}>
					Напишите <span>нам</span>
				</h2>
				<div className={styles.inputs}>
					<FormInput type="text" text="Имя" />
					<FormInput type="text" text="Фамилия" />
					<FormInput type="phone" text="Номер телефона" />
					<FormInput type="email" text="Почта" />
					<FormInput type="text" text="Комментарий" />
				</div>
				<div className={styles.buttons}>
					<button
						className={`${styles.submitButton} button`}
						type="submit"
						disabled={!isChecked}
					>
						Отправить
					</button>

					<div className={styles.checkbox}>
						<input
							type="checkbox"
							id="form-checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<label htmlFor="form-checkbox">
							Согласие субъекта персональных данных на обработку его
							персональных данных
						</label>
					</div>

					<button className={styles.attachment}>
						<Image
							className={styles.attachmentIcon}
							src={attachmentIcon}
							alt="Прикрепить документ"
						/>
						<p>Прикрепить документ</p>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
