import { useState } from 'react';

export default function useToggleMenus(initialState = {}) {
	const [menuStates, setMenuStates] = useState(initialState);

	const toggleMenu = (menuName) => {
		setMenuStates((prevStates) => ({
			...prevStates,
			[menuName]: !prevStates[menuName],
		}));
	};

	const closeMenu = (menuName) => {
		setMenuStates((prevStates) => ({
			...prevStates,
			[menuName]: false,
		}));
	};

	return [menuStates, toggleMenu, closeMenu];
}
