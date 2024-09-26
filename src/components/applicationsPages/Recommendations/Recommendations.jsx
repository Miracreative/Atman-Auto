// 'use client';

import styles from './Recommendations.module.scss';
import recomendationsData from '@/data/recomendationsData.js';
// import { useState, useEffect } from 'react';
import Link from 'next/link';



export default function Recommendations() {


	return (
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>

						<h2 className={styles.title}>
							Продукты рекомендуемые <br /> <span>к применению:</span>
						</h2>


						<div className={styles.content}>
							{recomendationsData.map((item, index) => (
								<div className={styles.item} key={item.id}>
									<Link className={styles.mobileLink} href='/'></Link>

									<div className={styles.nameItem}> {item.name} </div>
									<div className={styles.description}> {item.description} </div>

									<div className={styles.linkWrap}>
										<Link className={styles.link} href='/'> Подробнее </Link>
									</div>
								</div>
							))}
						</div>




					</div>
				</div>
			</section>
		</>
	);
}


