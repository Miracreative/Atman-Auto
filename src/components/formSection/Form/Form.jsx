'use client';

import { useState, useRef } from 'react';
import Image from 'next/image.js';
import Link from 'next/link';

import { useForm } from 'react-hook-form';

import { EMAIL_REGEXP, PHONE_REGEXP } from '@/constants/regexp.js';

import attachmentIcon from '../../../../public/attachment-icon.svg';

import FormInput from '../FormInput/FormInput.jsx';

import styles from './Form.module.scss';

const Form = ({ isOpen, onClose }) => {
	const {
		register,
		handleSubmit,
		reset,
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

	// console.log(errors);

	const filePickerRef = useRef(null);

	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleCloseForm = () => {
		onClose(false);
		setTimeout(() => {
			reset();
		}, 300);
	};

	const handlePickFile = () => {
		filePickerRef.current.click();
	};

	return (
		<div
			className={`${
				isOpen ? `${styles.visible} ${styles.container}` : styles.container
			}`}
			onClick={handleCloseForm}
		>
			<form
				className={styles.form}
				onClick={(e) => e.stopPropagation()}
				onSubmit={handleSubmit((data) => console.log(data))}
				noValidate
			>
				<button
					type="button"
					className={styles.buttonClose}
					onClick={handleCloseForm}
				>
					<span></span>
					<span></span>
				</button>

				<h2 className={styles.title}>
					Напишите <span>нам</span>
				</h2>

				<div className={styles.inputs}>
					<FormInput
						id="firstName"
						label="Имя"
						type="text"
						placeholder="Имя"
						register={register}
						validations={{
							required: 'Обязательное поле',
							minLength: {
								value: 2,
								message: 'Минимальное количество символов: 2',
							},
						}}
						errors={errors}
					/>

					<FormInput
						id="lastName"
						label="Фамилия"
						type="text"
						placeholder="Фамилия"
						register={register}
						validations={{
							required: 'Обязательное поле',
							minLength: {
								value: 2,
								message: 'Минимальное количество символов: 2',
							},
						}}
						errors={errors}
					/>

					<FormInput
						id="phoneNumber"
						label="Номер телефона"
						type="text"
						placeholder="Номер телефона"
						register={register}
						validations={{
							required: 'Обязательное поле',
							pattern: {
								value: PHONE_REGEXP,
								message: 'Некорректный номер телефона',
							},
						}}
						errors={errors}
					/>

					<FormInput
						id="email"
						label="Почта"
						type="email"
						placeholder="Почта"
						register={register}
						validations={{
							required: 'Обязательное поле',
							pattern: {
								value: EMAIL_REGEXP,
								message: 'Некорректный адрес электронной почты',
							},
						}}
						errors={errors}
					/>

					<FormInput
						id="comment"
						label="Комментарий"
						type="textarea"
						placeholder="Комментарий"
						register={register}
						validations={{ required: false }}
						errors={errors}
					/>
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
						<label htmlFor="form-checkbox"></label>
						<Link
							className={styles.link}
							href="/about/personal-data-processing-policy"
							onClick={onClose}
						>
							Согласие субъекта персональных данных на обработку его
							персональных данных
						</Link>
					</div>

					<button className={styles.attachment} onClick={handlePickFile}>
						<Image
							className={styles.attachmentIcon}
							src={attachmentIcon}
							alt="Прикрепить документ"
						/>
						<p>Прикрепить документ</p>
					</button>
					<input
						className={styles.filePickerHidden}
						type="file"
						accept="image/*,.png,.jpg,.jpeg,.gif,.web"
						ref={filePickerRef}
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
