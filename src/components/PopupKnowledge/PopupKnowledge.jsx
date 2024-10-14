'use client';


import knowledgeBase from '@/data/knowledgeBase.js';
import styles from './PopupKnowledge.module.scss';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PopupKnowledge({ popupActive, setPopupActive, cardId }) {

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
			<div className={`${popupActive ? styles.layout + ' ' + styles.active : styles.layout}`}>
				<div className={styles.popup}>
					<div className={styles.popupInner}>

						<div className={styles.topSide}>
							<div className={styles.btnContainer}>

								<div className={styles.closeBtn} onClick={() => setPopupActive(false)}>

									<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="40" cy="40" r="40" fill="#E41F26" />
										<path d="M49.0793 49.37C47.7512 50.6981 45.5979 50.6981 44.2698 49.37L31.8546 36.9548C30.5265 35.6267 30.5265 33.4735 31.8546 32.1454C33.1827 30.8173 35.336 30.8173 36.6641 32.1454L49.0792 44.5605C50.4073 45.8886 50.4074 48.0419 49.0793 49.37ZM36.1608 49.6123C34.9048 50.8683 32.8683 50.8683 31.6123 49.6123C30.3563 48.3563 30.3563 46.3198 31.6123 45.0638L44.8104 31.8657C46.0664 30.6097 48.1028 30.6097 49.3589 31.8657C50.6149 33.1218 50.6149 35.1582 49.3589 36.4142L36.1608 49.6123Z" fill="white" />
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










						<Link href={knowledge.file || '/knowledge'} className={styles.download} target="_blank" rel="noopener noreferrer">

							<div className={styles.downloadImg}>
								<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="50" cy="50" r="50" fill="#353535" />
									<path fillRule="evenodd" clipRule="evenodd" d="M49.1808 28.091C48.0132 28.3712 47.119 29.2034 46.7118 30.3884L46.6023 30.7071L46.5898 39.253L46.5773 47.7989L43.0226 47.8124L39.468 47.8259L39.1882 47.9357C38.7982 48.0888 38.3785 48.5017 38.2355 48.873C38.1473 49.1017 38.1332 49.213 38.1484 49.556C38.1805 50.2785 37.8094 49.8739 43.7476 55.6631C49.7187 61.4846 49.1879 61.0278 49.9829 61.0287C50.7759 61.0296 50.2715 61.4643 56.2619 55.617C60.6223 51.3607 61.5608 50.4231 61.6678 50.2161C61.8535 49.8566 61.8811 49.2644 61.7303 48.873C61.5872 48.5017 61.1676 48.0888 60.7776 47.9357L60.4978 47.8259L56.9431 47.8124L53.3885 47.7989L53.376 39.253L53.3635 30.7071L53.254 30.3884C53.0995 29.9388 52.8619 29.5137 52.5764 29.176C51.78 28.2341 50.4091 27.796 49.1808 28.091ZM30.7949 64.4051C29.4985 64.6687 28.5294 65.4932 28.1273 66.6748C28.0187 66.994 28.003 67.1149 28.0003 67.6536C27.9976 68.1762 28.0135 68.3195 28.1064 68.6097C28.294 69.1965 28.5128 69.5473 28.9754 70.0032C29.326 70.3488 29.4674 70.4524 29.8245 70.6255C30.0601 70.7397 30.4168 70.8707 30.6172 70.9166C30.9672 70.9967 31.7271 71 50.0295 71C68.4803 71 69.0878 70.9973 69.404 70.915C70.4229 70.6495 71.219 70.0222 71.6604 69.1371C71.9089 68.6386 72.003 68.2337 71.9999 67.6764C71.9947 66.7493 71.6817 66.0283 70.9897 65.3489C70.6289 64.9946 70.5013 64.9025 70.1215 64.7221C69.3244 64.3435 71.2843 64.3766 49.9596 64.3816C39.4703 64.3841 30.8462 64.3946 30.7949 64.4051Z" fill="white" />
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
	)
}


