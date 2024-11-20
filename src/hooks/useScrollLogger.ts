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
			const currentScrollY = window.scrollY;
			console.log(`Текущая позиция скролла: ${currentScrollY}px`);
			// Устанавливаем позицию скролла в глобальное состояние
			dispatch(setScrollY(currentScrollY));
		};

		// Восстанавливаем позицию прокрутки из глобального состояния
		if (scrollY !== undefined) {
			window.scrollTo(0, scrollY);
		}

		// Добавляем обработчик события прокрутки
		window.addEventListener('scroll', handleScroll);

		// Убираем обработчик при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [dispatch]);

	// Отслеживаем изменения scrollY
	useEffect(() => {
		console.log(`Текущая позиция scrollY из состояния: ${scrollY}px`);
	}, [scrollY]); // Этот эффект сработает каждый раз, когда scrollY изменится
};

export default useScrollLogger;
