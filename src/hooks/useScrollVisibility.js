import { useState, useEffect } from 'react';

const useScrollVisibility = (threshold = 200) => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > threshold) {
			setIsVisible(currentScrollY <= lastScrollY);
		} else {
			setIsVisible(true);
		}

		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	return isVisible;
};

export default useScrollVisibility;
