import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import type { SoutData } from '@/types/sout.ts';

import { HOST } from '@/constants/url';

import pdfIcon from '/public/icons/file-type/pdf-icon.svg';
import zipIcon from '/public/icons/file-type/zip-icon.svg';
// import defaultIcon from '/public/triangle-logo.png';

import styles from './SoutItem.module.scss';

const SoutItem: FC<SoutData> = ({
	id,
	name,
	filetype,
	filesize,
	url,
}: SoutData) => {
	let icon;
	let isDownloadable = false;
	let target = '_self';

	switch (filetype) {
		case '.pdf':
			icon = <Image src={pdfIcon} alt="PDF file icon" />;
			target = '_blank';
			break;
		case '.zip':
			icon = <Image src={zipIcon} alt="ZIP file icon" />;
			isDownloadable = true;
			break;
		default:
			// возможно, какой-то дефолтный случай
			// icon = <Image src={defaultIcon} alt="default file icon" />;
			icon = <div className={styles.defaultIcon}></div>;
	}

	const filesizeNumber =
		typeof filesize === 'string' ? parseFloat(filesize) : filesize;

	const filesizeInKB = (filesizeNumber / 1024).toFixed(2);

	const filetypeWithoutDot = filetype.slice(1);

	return (
		<Link
			// href={url}
			href={`${HOST}/${url}`}
			className={styles.container}
			target={target}
			rel="noopener noreferrer"
			download={isDownloadable ? true : undefined}
		>
			<div className={styles.container}>
				<div className={styles.iconContainer}>{icon}</div>
				<div className={styles.content}>
					<h3>{name}</h3>
					<div className={styles.info}>
						<p>{filetypeWithoutDot},&nbsp;</p>
						<p>{filesizeInKB} Kb</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SoutItem;
