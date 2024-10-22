'use client';

import { useSelector, useDispatch } from 'react-redux';

import {
	LOADING_INFO,
	LOADING_DATA_ERROR,
	NOT_FOUND_INFO,
} from '@/utils/informMessages';

import { AppDispatch } from '@/store/store';

import { getAllSout, setIsMobile } from '@/store/sout/soutSlice';

import type { SoutData } from '@/types/sout';

import SoutItem from '../SoutItem/SoutItem';

import styles from './SoutContent.module.scss';
import { useEffect } from 'react';

interface RootState {
	sout: {
		loading: boolean;
		error: string | null;
		sout: SoutData[];
		isMobile: boolean;
	};
}

const SoutContent: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();

	const { loading, error, isMobile, sout } = useSelector(
		(state: RootState) => state.sout,
	);

	const shouldDisplayMessage =
		!isMobile && (loading || error || sout.length === 0);

	useEffect(() => {
		dispatch(getAllSout());
	}, []);

	return (
		<section className={styles.section}>
			<h2>Годовой отчет</h2>

			{shouldDisplayMessage && (
				<div className={styles.messageContainer}>
					{loading && <p>{LOADING_INFO}</p>}
					{!loading && error && <p>{LOADING_DATA_ERROR}</p>}
					{!loading && !error && sout.length === 0 && <p>{NOT_FOUND_INFO}</p>}
				</div>
			)}

			{isMobile && sout.length === 0 && (
				<div className={styles.messageContainer}>
					{loading && <p>{LOADING_INFO}</p>}
					{!loading && error && <p>{LOADING_DATA_ERROR}</p>}
					{!loading && !error && sout.length === 0 && <p>{NOT_FOUND_INFO}</p>}
				</div>
			)}

			{!loading && !error && sout.length > 0 && (
				<ul className={styles.list}>
					{sout.map((item) => (
						<li key={item.id}>
							<SoutItem
								id={item.id}
								name={item.name}
								filetype={item.filetype}
								filesize={item.filesize}
								url={item.url}
							/>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default SoutContent;
