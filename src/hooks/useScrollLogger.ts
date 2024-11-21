// hooks/useScrollLogger.ts
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollY } from '@/store/scrollSlice/scrollSlice';
import { RootState } from '@/store/store';

const useScrollLogger = () => {
	const dispatch = useDispatch();
	const scrollY = useSelector((state: RootState) => state.scroll.scrollY);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			dispatch(setScrollY(currentScrollY));
		};

		if (scrollY !== undefined) {
			window.scrollTo(0, scrollY);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [dispatch]);


};

export default useScrollLogger;
