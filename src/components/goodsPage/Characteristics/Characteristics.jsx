import Link from 'next/link';

import RedDot from '@/components/RedDot/RedDot';

import styles from './Characteristics.module.scss';

const Characteristics = ({ products }) => {
	const product = products[2];

	return (
		<div>
			<h2 className={styles.title}>Характеристики</h2>
			<ul className={styles.list}>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Бренд: <span>{product.brand}</span>
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Толщина: <span>{product.thickness}</span>
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Тип основы: <span>{product.base}</span>
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Тип клея: <span>{product.typeGlue}</span>
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Цвет: <span>{product.color}</span>
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Тип лайнера: <span>{product.linerType}</span>
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Термостойкость: <span>{product.heatResistance}</span>
					</p>
				</li>
			</ul>
			<div className={`${styles.downloadContainer}`}>
				<Link href={product.pdfUrl} target="_blank" className={styles.download}>
					<p>Скачать характеристики</p>
					<svg
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="48" height="48" rx="15" fill="white" />
						<path
							d="M24.0459 26.549L23.837 27.1439C23.4905 28.1299 22.9453 29.0383 22.2303 29.819L22.4188 29.7834C23.4922 29.5781 24.5978 29.5781 25.6729 29.7834L25.8597 29.819C25.1464 29.0383 24.5995 28.1299 24.2548 27.1455L24.0459 26.549Z"
							fill="#E41F26"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14 14.4828C14 13.9009 14.2106 13.3658 14.5622 12.9423C15.0411 12.3685 15.7799 12 16.6087 12H23.5652C24.0459 12 24.4348 12.3702 24.4348 12.8276V19.8621C24.4348 20.7769 25.2126 21.5172 26.1739 21.5172H33.1304C33.6111 21.5172 34 21.8874 34 22.3448V33.5172C34 34.8879 32.8315 36 31.3913 36H16.6087C15.1685 36 14 34.8879 14 33.5172V14.4828ZM25.2823 24.8486C24.8865 23.7171 23.2052 23.7171 22.8077 24.8486L22.1861 26.6202C22.0995 26.8691 21.9959 27.1115 21.877 27.3475C21.573 27.952 21.1671 28.5049 20.6729 28.9865L20.0275 29.6185C19.1325 30.493 19.9613 31.9413 21.2181 31.7004L22.7602 31.4062C23.0574 31.3497 23.3563 31.3125 23.6569 31.2963C24.0543 31.2737 24.4535 31.285 24.8492 31.3319C25.0105 31.3513 25.1702 31.3755 25.3298 31.4062L26.8719 31.702C28.1287 31.9413 28.9575 30.493 28.0642 29.6185L27.4171 28.9865C26.7327 28.3174 26.2147 27.5075 25.9039 26.6218L25.2823 24.8486Z"
							fill="#E41F26"
						/>
						<path
							d="M32.9878 20.2759C33.3699 20.2759 33.5652 19.8411 33.302 19.5776L26.4898 12.7516C26.2181 12.4801 25.7391 12.6627 25.7391 13.0361V19.4483C25.7391 19.9057 26.1281 20.2759 26.6087 20.2759H32.9878Z"
							fill="#E41F26"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default Characteristics;