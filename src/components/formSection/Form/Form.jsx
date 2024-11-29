'use client';

import { useState, useRef } from 'react';
import Image from 'next/image.js';
import Link from 'next/link';

import { useForm } from 'react-hook-form';

import { EMAIL_REGEXP, PHONE_REGEXP } from '@/constants/regexp.js';

import {
	MIN_LENGTH_FIELD,
	REQUIRED_FIELD,
	MAIL_SUBMISSION_ERROR,
	INCORRECT_EMAIL,
	INCORRECT_PHONE,
	MAIL_SUCCESSED,
} from '@/utils/informMessages.js';

import attachmentIcon from '/public/attachment-icon.svg';
import checkIcon from '/public/big-check.svg';

import FormInput from '../FormInput/FormInput.jsx';

import styles from './Form.module.scss';

const Form = ({ isOpen, onClose }) => {
	const {
		register,
		handleSubmit,
		reset,
		trigger,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			comment: '',
		},
		// валидация по умолчанию без потери фокуса (onBlur)
		mode: 'onChange',
		// mode: 'onBlur',
	});

	const filePickerRef = useRef(null);
	const [file, setFile] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);

	const [isChecked, setIsChecked] = useState(false);

	// процесс отправки сообщения
	const [isSubmitting, setIsSubmitting] = useState(false);

	// факт отправки сообщения
	const [isSubmit, setIsSubmit] = useState(false);

	const minLengthField = 2;

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleCloseForm = () => {
		onClose(false);
		// setFile(null);

		if (isSubmitting) {
			setTimeout(() => {
				setIsSubmitting(false);
			}, 300);
		}

		setTimeout(() => {
			setIsSubmit(false);
			reset();
			setIsChecked(false);
			setSelectedFile(null);
			setFile(null);
		}, 300);
	};

	const handleFileUpload = (event) => {
		if (event.target.files.length > 0) {
			const reader = new FileReader();

			reader.onload = () => {
				setFile({
					name: event.target.files[0].name,
					content: reader.result.split(',')[1],
				});
				setSelectedFile(event.target.files[0]);
			};

			reader.readAsDataURL(event.target.files[0]);
		}
	};

	const handlePickFile = () => {
		filePickerRef.current.click();
	};

	const sendForm = async (data) => {
		console.log('data', data);
		setIsSubmitting(true);

		try {
			const payload = { ...data, file };

			const response = await fetch('/api/sendEmail', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			// const result = await response.json();

			if (response.ok) {
				// console.log(MAIL_SUCCESSED, result.data);
				console.log(MAIL_SUCCESSED);
				reset();
				setSelectedFile(null);
				setFile(null);
			} else {
				// console.log(MAIL_SUBMISSION_ERROR, result.error);
				console.log(MAIL_SUBMISSION_ERROR);
			}
		} catch (error) {
			console.error('Ошибка:', error.message);
		} finally {
			setIsSubmitting(false);
			setIsSubmit(true);
			setTimeout(() => {
				handleCloseForm();
				setIsSubmit(false);
			}, 5000);
		}
	};

	const onSubmit = (data) => {
		sendForm(data);
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

				{isSubmit && (
					// {!isSubmit && (
					<div className={styles.successContainer}>
						<h2 className={styles.successTitle}>
							Ваше сообщение <span>успешно отправлено</span>
						</h2>
						<div className={styles.successSubtitle}>
							<p>Мы ответим Вам в ближайшее время.</p>
							<p>Спасибо за заявку.</p>
						</div>
					</div>
				)}

				{!isSubmit && (
					// {isSubmit && (
					<>
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
								onBlur={() => trigger('firstName')}
								validations={{
									required: REQUIRED_FIELD,
									minLength: {
										value: minLengthField,
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
								onBlur={() => trigger('lastName')}
								validations={{
									required: REQUIRED_FIELD,
									minLength: {
										value: minLengthField,
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
								onBlur={() => trigger('phoneNumber')}
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
								onBlur={() => trigger('email')}
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
									disabled={!isChecked || isSubmitting || !isValid}
								>
									{isSubmitting ? 'Отправка...' : 'Отправить'}
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
									<button
										className={styles.attachment}
										type="button"
										onClick={handlePickFile}
									>
										<Image
											className={styles.attachmentIcon}
											src={attachmentIcon}
											alt="Прикрепить документ"
											loading="lazy"
										/>
										<p>Прикрепить документ</p>
									</button>
								</div>
							)}

							{selectedFile && (
								<div className={styles.attachmentContainer}>
									<button
										className={`${styles.attachment} ${styles.attachmentSuccessfully}`}
										type="button"
										onClick={handlePickFile}
									>
										<Image
											className={styles.attachmentIcon}
											src={checkIcon}
											alt="Документ прикреплен"
											loading="lazy"
										/>
										<p>Документ прикреплен</p>
									</button>
								</div>
							)}

							<input
								className={styles.filePickerHidden}
								type="file"
								// Если хотим ограничить картинками
								// accept="image/*,.png,.jpg,.jpeg,.gif,.web"
								ref={filePickerRef}
								onChange={handleFileUpload}
							/>
						</div>
					</>
				)}
			</form>
		</div>
	);
};

export default Form;
