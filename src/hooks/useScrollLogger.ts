// hooks/useScrollLogger.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollY } from '@/store/scrollSlice/scrollSlice';

import { RootState } from '@/store/store';

const useScrollLogger = () => {
	const dispatch = useDispatch();
	const scrollY = useSelector((state: RootState) => state.scroll.scrollY);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const handleScroll = () => {
			const scrollY = window.scrollY;
			console.log(`Текущая позиция скролла: ${scrollY}px`);
			// Устанавливаем позицию скролла в глобальное состояние
			dispatch(setScrollY(scrollY));
		};

		if (scrollY !== undefined) {
			window.scrollTo(0, scrollY);
		}



		// Добавляем обработчик события прокрутки
		window.addEventListener('scroll', handleScroll);

		// Убираем обработчик при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [dispatch, scrollY]);
};

export default useScrollLogger;
