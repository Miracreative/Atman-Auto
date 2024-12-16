import styles from './Recommendations.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import axios from 'axios';




export default function Recommendations({requestAddress}) {

	const [recomendationsData, setRecomendationsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(`${process.env.HOST}${requestAddress}`);
			console.log(process.env.HOST, requestAddress ,response.data)
			setRecomendationsData(response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);



	return (
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>

						<h2 className={styles.title}>
							Продукты рекомендуемые <br /> <span>к применению:</span>
						</h2>


						<div className={styles.content}>
							
							{
								recomendationsData.length > 0 ?
								recomendationsData.map((item) => (
								<div className={styles.item} key={item.id}>

									<div className={styles.nameItem}> {item.name} </div>
									<div className={styles.description}> {item.description} </div>

									<div className={styles.linkWrap}>
										<Link className={styles.link} href={`/goods/${item.id}`}> Подробнее </Link>
									</div>
								</div>
							)) : 
							<p>Пока нет товаров в данной категории</p>
						}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}


