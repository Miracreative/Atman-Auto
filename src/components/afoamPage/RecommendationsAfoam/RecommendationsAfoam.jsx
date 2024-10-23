// 'use client';

import styles from './RecommendationsAfoam.module.scss';
import recomendationsData from '@/data/recomendationsData.js';
// import { useState, useEffect } from 'react';
import Link from 'next/link';



export default function RecommendationsAfoam() {


	return (
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>



						<div className={styles.content}>
							{recomendationsData.map((item) => (
								<div className={styles.item} key={item.id}>

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


