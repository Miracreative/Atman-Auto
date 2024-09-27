'use client';

import { useState } from 'react';
import Image from 'next/image.js';

import { useForm } from 'react-hook-form';

// import FormInput from '../FormInput/FormInput.jsx';

import { EMAIL_REGEXP, PHONE_REGEXP } from '@/constants/regexp.js';

import attachmentIcon from '../../../../public/attachment-icon.svg';

import styles from './Form.module.scss';

const Form = ({ isOpen, onClose }) => {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			comment: '',
		},
	});

	console.log(errors);

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
			<form
				className={styles.form}
				onClick={(e) => e.stopPropagation()}
				onSubmit={handleSubmit((data) => console.log(data))}
				noValidate
			>
				<button type="button" className={styles.buttonClose} onClick={onClose}>
					<span></span>
					<span></span>
				</button>
				<h2 className={styles.title}>
					Напишите <span>нам</span>
				</h2>
				{/* <div className={styles.inputs}>
					<FormInput type="text" text="Имя" />
					<FormInput type="text" text="Фамилия" />
					<FormInput type="phone" text="Номер телефона" />
					<FormInput type="email" text="Почта" />
					<FormInput type="text" text="Комментарий" />
				</div> */}
				<div className={styles.inputs}>
					<div className={styles.inputContainer}>
						<label htmlFor="firstName">Имя</label>
						<input
							id="firstName"
							{...register('firstName', {
								required: 'Обязательное поле',
								minLength: {
									value: 2,
									message: 'Минимальное количество символов: 2',
								},
							})}
							className={styles.input}
							type="text"
							placeholder="Имя"
						/>
						<p className={styles.error}>
							{errors.firstName?.message ? errors.firstName.message : ''}
						</p>
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor="lastName">Фамилия</label>
						<input
							id="lastName"
							{...register('lastName', {
								required: 'Обязательное поле',
								minLength: {
									value: 2,
									message: 'Минимальное количество символов: 2',
								},
							})}
							className={styles.input}
							type="text"
							placeholder="Фамилия"
						/>
						<p className={styles.error}>
							{errors.lastName?.message ? errors.lastName.message : ''}
						</p>
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor="phoneNumber">Номер телефона</label>
						<input
							id="phoneNumber"
							{...register('phoneNumber', {
								required: 'Обязательное поле',
								pattern: {
									value: PHONE_REGEXP,
									message: 'Некорректный номер телефона',
								},
							})}
							className={styles.input}
							type="phone"
							placeholder="Номер телефона"
						/>
						<p className={styles.error}>
							{errors.phoneNumber?.message ? errors.phoneNumber.message : ''}
						</p>
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor="email">Почта</label>
						<input
							id="email"
							{...register('email', {
								required: 'Обязательное поле',
								pattern: {
									value: EMAIL_REGEXP,
									message: 'Введите корректный адрес электронной почты',
								},
							})}
							className={styles.input}
							type="email"
							placeholder="Почта"
						/>
						<p className={styles.error}>
							{errors.email?.message ? errors.email.message : ''}
						</p>
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor="comment">Комментарий</label>
						<input
							id="comment"
							{...register('comment', { required: false })}
							className={styles.input}
							type="text"
							placeholder="Комментарий"
						/>
					</div>
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
