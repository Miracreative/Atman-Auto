export const getFilterFlag = () => {
	return localStorage.getItem('filterFlag');
};

export const setFilterFlag = (value) => {
	localStorage.setItem('filterFlag', value);
};
