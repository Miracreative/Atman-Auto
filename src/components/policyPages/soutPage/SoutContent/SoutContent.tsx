'use client';

import { useSelector, useDispatch } from 'react-redux';

import {
	LOADING_INFO,
	LOADING_DATA_ERROR,
	NOT_FOUND_INFO,
} from '@/utils/informMessages';

import { AppDispatch } from '../../../../store/store';

import { getAllSout } from '@/store/sout/soutSlice';

import type { SoutData } from '@/types/sout';

// import soutDataFromSource from '@/data/sout.js';

import SoutItem from '../SoutItem/SoutItem';

import styles from './SoutContent.module.scss';
import { useEffect } from 'react';

interface RootState {
	sout: {
		loading: boolean;
		error: string | null;
		sout: SoutData[];
	};
}

const SoutContent: React.FC = () => {
	// const sout: SoutData[] = soutDataFromSource as SoutData[];

	const dispatch: AppDispatch = useDispatch();

	const { loading, error, sout } = useSelector(
		(state: RootState) => state.sout,
	);

	useEffect(() => {
		dispatch(getAllSout());
	}, []);

	// const handleFilterChange = () => {
	// 	dispatch(getFilteredMainParamGoods(filterMainParam));
	// };

	return (
		<section className={styles.section}>
			<h2>Годовой отчет</h2>
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
		</section>
	);
};

export default SoutContent;
