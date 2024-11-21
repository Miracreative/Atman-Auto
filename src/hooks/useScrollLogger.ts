// hooks/useScrollLogger.ts
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollY } from '@/store/scrollSlice/scrollSlice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/router';

const useScrollLogger = () => {
	const dispatch = useDispatch();
	const scrollY = useSelector((state: RootState) => state.scroll.scrollY);
	// const scrollYRef = useRef(scrollY); // Используем useRef для хранения текущего значения scrollY

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			console.log(`Текущая позиция скролла: ${currentScrollY}px`);
			// Устанавливаем позицию скролла в глобальное состояние
			dispatch(setScrollY(currentScrollY));
			// scrollYRef.current = currentScrollY; // Обновляем значение в useRef
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


};

export default useScrollLogger;
