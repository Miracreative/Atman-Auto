import { useEffect } from 'react';

const useSaveScrollPosition = () => {
	useEffect(() => {
		// Сохраняем позицию прокрутки перед уходом со страницы
		const handleBeforeUnload = () => {
			console.log('Сохраняем позицию прокрутки:', window.scrollY);
			window.sessionStorage.setItem('scrollPosition', window.scrollY);
		};

		// Восстанавливаем позицию прокрутки после обновления страницы
		const scrollToPosition = () => {
			const scrollPosition = window.sessionStorage.getItem('scrollPosition');
			console.log('Восстанавливаем позицию прокрутки:', scrollPosition);
			if (scrollPosition) {
				window.scrollTo(0, parseInt(scrollPosition, 10));
			}
		};

		window.addEventListener('beforeunload', handleBeforeUnload);
		window.addEventListener('load', scrollToPosition);

		// Убираем обработчики событий при размонтировании компонента
		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
			window.removeEventListener('load', scrollToPosition);
		};
	}, []);
};

export default useSaveScrollPosition;