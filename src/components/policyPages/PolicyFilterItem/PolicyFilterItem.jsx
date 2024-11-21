import Link from 'next/link';
import Image from 'next/image';

import image from '/public/check.svg';

import styles from './PolicyFilterItem.module.scss';

const PolicyFilterItem = ({ link, checked, onChange, text }) => {
	return (
		<Link href={link} className={`${styles.item} ${checked ? styles.disabled : ''}`} onClick={onChange}>
			<div>
				<div className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
					{checked && (
						<Image className={styles.icon} src={image} alt="Active page" />
					)}
					{/* <Image src={image} alt="Active page" /> */}
				</div>
			</div>

			<span className={styles.label}>{text}</span>
		</Link>
	);
};

export default PolicyFilterItem;
