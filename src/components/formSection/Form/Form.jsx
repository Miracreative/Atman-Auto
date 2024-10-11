'use client';

import { useState, useRef } from 'react';
import Image from 'next/image.js';
import Link from 'next/link';

import { useForm } from 'react-hook-form';

import { EMAIL_REGEXP, PHONE_REGEXP } from '@/constants/regexp.js';

import {
	MIN_LENGTH_FIELD,
	REQUIRED_FIELD,
	FORM_SUBMISSION_ERROR,
	INCORRECT_EMAIL,
	INCORRECT_PHONE,
	FORM_SUCHESSED,
} from '@/utils/informMessages.js';

import attachmentIcon from '../../../../public/attachment-icon.svg';
import checkIcon from '../../../../public/big-check.svg';

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

	const [selectedFile, setSelectedFile] = useState(null);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleCloseForm = () => {
		onClose(false);
		setTimeout(() => {
			reset();
		}, 300);
	};

	const handleFileUpload = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handlePickFile = () => {
		filePickerRef.current.click();
	};

	const onSubmit = async (data) => {
		const formData = new FormData();

		// Добавляем все данные из формы
		formData.append('firstName', data.firstName);
		formData.append('lastName', data.lastName);
		formData.append('phoneNumber', data.phoneNumber);
		formData.append('email', data.email);
		formData.append('comment', data.comment);

		// Добавляем файл, если он выбран
		if (selectedFile) {
			formData.append('file', selectedFile);
			console.log(selectedFile);
		}

		// Пример отправки данных на сервер
		try {
			const response = await fetch('/api/submit', {
				method: 'POST',
				body: formData,
			});
			if (response.ok) {
				console.log(FORM_SUCHESSED);
			} else {
				console.error(FORM_SUBMISSION_ERROR);
			}
		} catch (error) {
			console.error('Ошибка сети:', error);
		}
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
				onSubmit={handleSubmit(onSubmit)}
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
							required: REQUIRED_FIELD,
							minLength: {
								value: 2,
								message: MIN_LENGTH_FIELD,
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
							required: REQUIRED_FIELD,
							minLength: {
								value: 2,
								message: MIN_LENGTH_FIELD,
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
							required: REQUIRED_FIELD,
							pattern: {
								value: PHONE_REGEXP,
								message: INCORRECT_PHONE,
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
							required: REQUIRED_FIELD,
							pattern: {
								value: EMAIL_REGEXP,
								message: INCORRECT_EMAIL,
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
					<div className={styles.submitButtonContainer}>
						<button
							className={`button ${styles.submitButton}`}
							type="submit"
							disabled={!isChecked}
						>
							Отправить
						</button>
					</div>

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

					{!selectedFile && (
						<div className={styles.attachmentContainer}>
							<button className={styles.attachment} onClick={handlePickFile}>
								<Image
									className={styles.attachmentIcon}
									src={attachmentIcon}
									alt="Прикрепить документ"
								/>
								<p>Прикрепить документ</p>
							</button>
						</div>
					)}

					{selectedFile && (
						<div className={styles.attachmentContainer}>
							<button
								className={`${styles.attachment} ${styles.attachmentSuccessfully}`}
								onClick={handlePickFile}
							>
								<Image
									className={styles.attachmentIcon}
									src={checkIcon}
									alt="Документ прикреплен"
								/>
								<p>Документ прикреплен</p>
							</button>
						</div>
					)}

					<input
						className={styles.filePickerHidden}
						type="file"
						// accept="image/*,.png,.jpg,.jpeg,.gif,.web"
						ref={filePickerRef}
						onChange={handleFileUpload}
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
