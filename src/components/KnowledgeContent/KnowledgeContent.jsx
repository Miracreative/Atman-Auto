'use client';

import styles from './KnowledgeContent.module.scss';
import knowledgeBase from '@/data/knowledgeBase.js';
import PopupKnowledge from '../PopupKnowledge/PopupKnowledge.jsx';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function KnowledgeContent() {

	const [posts, SetPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [popupActive, setPopupActive] = useState(false);

	const fetchNews = async () => {
		setLoading(true);
		try {
			// const response = await axios.get(URL_NEWS);
			const response = await axios.get(`${process.env.HOST}/api/base`);
			SetPosts(response.data);
		} catch (err) {
			setError(err.message);
		}
		finally {
			setLoading(false);
		}

	};

	useEffect(() => {
		fetchNews();
	}, []);


	console.log(posts);








	// const [posts, SetPosts] = useState(knowledgeBase);
	const postPerPage = 10;
	const [currentPage, SetCurrentPage] = useState(1);

	const [pageItem, SetPageItem] = useState({
		start: 0,
		end: postPerPage,
	})

	const onPageChangeEvent = (start, end) => {
		SetPageItem({
			start: start,
			end: end
		})
	}



	const numOfPages = Math.ceil(posts.length / postPerPage);
	// console.log(numOfPages);

	const numOfButtons = [];
	for (let i = 1; i <= numOfPages; i++) {
		numOfButtons.push(i);
	}

	const prevPageClick = () => {
		if (currentPage === 1) {
			SetCurrentPage(currentPage);
		} else {
			SetCurrentPage(currentPage - 1);
		}
	}


	const nextPageClick = () => {
		if (currentPage === numOfButtons.length) {
			SetCurrentPage(currentPage);
		} else {
			SetCurrentPage(currentPage + 1);
		}
	}

	const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

	useEffect(() => {
		let tempNumberOfButtons = [...arrOfCurrButtons]

		let dotsInitial = '...'
		let dotsLeft = '... '
		let dotsRight = ' ...'

		if (numOfButtons.length < 7) {
			tempNumberOfButtons = numOfButtons
		}

		else if (currentPage >= 1 && currentPage <= 3) {
			tempNumberOfButtons = [1, 2, 3, 4, dotsInitial, numOfButtons.length]
		}


		else if (currentPage > 3 && currentPage < numOfButtons.length - 2) {

			const sliced1 = numOfButtons.slice(currentPage - 3, currentPage)

			const sliced2 = numOfButtons.slice(currentPage, currentPage + 1)

			tempNumberOfButtons = ([...sliced1, ...sliced2, dotsRight, numOfButtons.length])

		}

		else if (currentPage > numOfButtons.length - 3) {

			const sliced = numOfButtons.slice(numOfButtons.length - 4)

			tempNumberOfButtons = ([1, dotsLeft, ...sliced])
		}

		else if (currentPage === dotsInitial) {

			SetCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
		}
		else if (currentPage === dotsRight) {
			SetCurrentPage(arrOfCurrButtons[3] + 2)
		}

		else if (currentPage === dotsLeft) {
			SetCurrentPage(arrOfCurrButtons[3] - 2)
		}

		setArrOfCurrButtons(tempNumberOfButtons);
		const value = currentPage * postPerPage;

		onPageChangeEvent(value - postPerPage, value)
	}, [currentPage, posts]);


	const [cardId, setCardId] = useState(null);

	const handleCardClick = (cardId) => {
		setPopupActive(true);
		setCardId(cardId);
		console.log(cardId);

	};



	// useEffect(() => {
	// 	fetchNews();
	// }, []);

	// useEffect(() => {
	// 	return <p>Loading...</p>;
	// }, [loading]);
	// if (loading) {
	// 	return <p>Loading...</p>;
	// }


	if (error) {
		return <p>Ошибка: {error}</p>;
	}


	return (
		<>
			<section className={styles.section}>
				<PopupKnowledge popupActive={popupActive} setPopupActive={setPopupActive} cardId={cardId}></PopupKnowledge>
				<div className='container'>
					<div className={styles.wrap}>

						{
							posts.slice(pageItem.start, pageItem.end).map((item, index) => {
								return (
									<div key={index} className={styles.card} onClick={() => handleCardClick(item.id)}>
										<div className={styles.cardInner}>
											<div className={styles.title}>{item.title}</div>
											<div className={styles.text}>{item.content}</div>
										</div>
									</div>
								)
							})
						}

					</div>





					<div className={styles.paginationContainer}>
						<ul className={styles.inner}>
							<li className={styles.buttonWrap}>
								<button className={styles.button} onClick={prevPageClick} disabled={currentPage === 1}>

									<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20 2.99989L15 0.113164L15 5.88667L20 2.99989ZM2.83321e-06 3.5L15.5 3.49991L15.5 2.49991L-2.83321e-06 2.5L2.83321e-06 3.5Z" fill="white" />
									</svg>

								</button>
							</li>



							{
								arrOfCurrButtons.map((data, index) => {
									return (
										<li key={index} className={`${styles.pageNumber} ${currentPage === data ? styles.active : ''}`}><a className={styles.pageLink} onClick={() => SetCurrentPage(data)}>{data}</a></li>
									)
								})
							}



							<li className={styles.buttonWrap}>

								<button className={styles.button} onClick={nextPageClick} disabled={currentPage === numOfButtons.length}>
									<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20 2.99989L15 0.113164L15 5.88667L20 2.99989ZM2.83321e-06 3.5L15.5 3.49991L15.5 2.49991L-2.83321e-06 2.5L2.83321e-06 3.5Z" fill="white" />
									</svg>

								</button>
							</li>
						</ul>
					</div>

				</div>
			</section>
		</>
	)
}

