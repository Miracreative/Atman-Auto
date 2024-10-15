import GoodsDropButton from '../GoodsDropButton/GoodsDropButton.jsx';
import GoodsFilterPanel from '../GoodsFilterPanel/GoodsFilterPanel.jsx';

import styles from './GoodsMobFilterPanel.module.scss';

const GoodsMobFilterPanel = ({
	isOpenFilter,
	setIsOpenFilter,
	isMobile,
	filter,
	setFilter,
	onFilterChange,
	onFetchProducts,
}) => {
	return (
		<>
			<GoodsDropButton
				isOpenFilter={isOpenFilter}
				setIsOpenFilter={setIsOpenFilter}
			/>
			<GoodsFilterPanel
				isOpenFilter={isOpenFilter}
				setIsOpenFilter={setIsOpenFilter}
				filter={filter}
				setFilter={setFilter}
				onFilterChange={onFilterChange}
				onFetchProducts={onFetchProducts}
				isMobile={isMobile}
			/>
		</>
	);
};

export default GoodsMobFilterPanel;
