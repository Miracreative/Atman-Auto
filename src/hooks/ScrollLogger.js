"use client";

import { useEffect } from 'react';

const ScrollLogger = () => {
	useEffect(() => {

		if (typeof window === 'undefined') return;
		const handleScroll = () => {
			const scrollY = window.scrollY;
			console.log(`Текущая позиция скролла: ${scrollY}px`);
			// Устанавливаем переменную test в sessionStorage
			sessionStorage.setItem('scrollY', `${scrollY}`);

			// Для проверки, можно вывести значение в консоль
			const testValue = sessionStorage.getItem('scrollY');
			console.log(`Значение переменной test в sessionStorage: ${testValue}`);
		};
		// Восстанавливаем позицию прокрутки из sessionStorage
		const savedScrollY = sessionStorage.getItem('scrollY');
		if (savedScrollY) {
			window.scrollTo(0, parseInt(savedScrollY, 10));
		}
		// Добавляем обработчик события прокрутки
		window.addEventListener('scroll', handleScroll);









		// Убираем обработчик при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return null; // Компонент не рендерит ничего
};

export default ScrollLogger;

