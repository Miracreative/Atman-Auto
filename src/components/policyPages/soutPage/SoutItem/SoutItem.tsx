import Image from 'next/image';

import type { FC } from 'react';
import type { SoutData } from '@/types/sout.ts';

import pdfIcon from '/public/icons/file-type/pdf-icon.svg';
import zipIcon from '/public/icons/file-type/zip-icon.svg';

import styles from './SoutItem.module.scss';

const SoutItem: FC<SoutData> = ({ id, name, fileType, fileSize }: SoutData) => {
	let icon;

	switch (fileType) {
		case 'pdf':
			icon = <Image src={pdfIcon} alt="PDF file icon" />;
			break;
		case 'zip':
			icon = <Image src={zipIcon} alt="ZIP file icon" />;
			break;
		default:
			// возможно, какой-то дефолтный случай
			icon = <div>Unknown file type</div>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.iconContainer}>
				{/* {fileType === 'pdf' && <Image src={pdfIcon} alt="PDF file icon" />}
				{fileType === 'zip' && <Image src={zipIcon} alt="ZIP file icon" />} */}

				{icon}
			</div>
			<div className={styles.content}>
				<h3>{name}</h3>
				<div className={styles.info}>
					<p>{fileType},&nbsp;</p>
					<p>{fileSize}</p>
				</div>
			</div>
		</div>
	);
};

export default SoutItem;
