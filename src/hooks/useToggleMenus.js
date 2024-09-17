import { useState } from 'react';

export default function useToggleMenus(initialState = {}) {
	const [menuStates, setMenuStates] = useState(initialState);

	const toggleMenu = (menuName) => {
		setMenuStates((prevStates) => {
			const newState = {};

			// Закрываем все открытые меню
			for (const key in prevStates) {
				newState[key] = false;
			}

			// Меняем состояние для выбранного меню
			newState[menuName] = !prevStates[menuName];

			return newState;
		});
	};

	const closeMenu = (menuName) => {
		setMenuStates((prevStates) => ({
			...prevStates,
			[menuName]: false,
		}));
	};

	return [menuStates, toggleMenu, closeMenu];
}
