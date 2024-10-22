'use client';

import knowledgeBase from '@/data/knowledgeBase.js';
import styles from './PopupKnowledge.module.scss';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PopupKnowledge({
	popupActive,
	setPopupActive,
	cardId,
}) {
	const [knowledge, setKnowledge] = useState({});
	const [error, setError] = useState(null);

	useEffect(() => {
		if (cardId !== null && cardId !== undefined) {
			fetchKnowledge(cardId);
		}
	}, [cardId]);

	const fetchKnowledge = async (id) => {
		try {
			const response = await axios.get(`${process.env.HOST}/api/base/${id}`);
			setKnowledge(response.data);
		} catch (err) {
			setError(err.message);
		}
	};

	// console.log(knowledge);
	// console.log(knowledge.title); не может прочитать

	return (
		<>
			<div
				className={`${
					popupActive ? styles.layout + ' ' + styles.active : styles.layout
				}`}
			>
				<div className={styles.popup}>
					<div className={styles.popupInner}>
						<div className={styles.topSide}>
							<div className={styles.btnContainer}>
								<div
									className={styles.closeBtn}
									onClick={() => setPopupActive(false)}
								>
									<svg
										width="80"
										height="80"
										viewBox="0 0 80 80"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="40" cy="40" r="40" fill="#E41F26" />
										<path
											d="M49.0793 49.37C47.7512 50.6981 45.5979 50.6981 44.2698 49.37L31.8546 36.9548C30.5265 35.6267 30.5265 33.4735 31.8546 32.1454C33.1827 30.8173 35.336 30.8173 36.6641 32.1454L49.0792 44.5605C50.4073 45.8886 50.4074 48.0419 49.0793 49.37ZM36.1608 49.6123C34.9048 50.8683 32.8683 50.8683 31.6123 49.6123C30.3563 48.3563 30.3563 46.3198 31.6123 45.0638L44.8104 31.8657C46.0664 30.6097 48.1028 30.6097 49.3589 31.8657C50.6149 33.1218 50.6149 35.1582 49.3589 36.4142L36.1608 49.6123Z"
											fill="white"
										/>
									</svg>
								</div>
							</div>

							<div className={styles.content}>
								<div className={styles.title}>
									{knowledge && knowledge.title}
								</div>

								<div className={styles.text}>
									{knowledge && knowledge.content}
								</div>
							</div>
						</div>

						<Link
							href={knowledge.file || '/knowledge'}
							className={styles.download}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className={styles.downloadImg}>
								<svg
									width="100"
									height="100"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="50" cy="50" r="50" fill="#353535" />
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M49.1808 28.091C48.0132  49.9596 64.3816C39.4703 64.3841 30.8462 64.3946 30.7949 64.4051Z"
										fill="white"
									/>
								</svg>
							</div>
							<div className={styles.descriptionDownload}>
								<div className={styles.fileName}>
									{knowledge && knowledge.file_name}
								</div>
								<div className={styles.paragraph}>Скачать</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
