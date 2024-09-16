import TriangleIcon from '../../TriangleIcon/TriangleIcon';
import SurveyItem from '../SurveyItem/SurveyItem';

import styles from './SurveyFormMobile.module.scss';

const SurveyFormMobile = ({
	selectedItem,
	isOpen,
	toggleMenu,
	items,
	handleSelect,
	handleCloseMenu,
}) => {
	return (
		<div className={styles.formMobile}>
			<div className={styles.optionsMobileContainer}>
				<div className={styles.optionsMenuMobile} onClick={toggleMenu}>
					<SurveyItem
						id={selectedItem.id}
						value={selectedItem.value}
						checked={true}
						onChange={() => {}}
					/>
					<p>{selectedItem.text}</p>
					<div className={styles.arrow}>
						<TriangleIcon color="var(--white)" isOpen={isOpen} />
					</div>
				</div>

				<ul
					className={`${styles.optionsMobile} ${
						isOpen ? styles.visibleMenu : styles.hiddenMenu
					}`}
				>
					{items.map((item) => (
						<li
							key={item.id}
							// className={styles.optionMobile}
							onClick={() => {
								handleCloseMenu('isOpenMenuTask');
							}}
						>
							<SurveyItem
								key={item.id}
								id={item.id}
								name={item.name}
								value={item.value}
								text={item.text}
								extraText={item.extraText}
								checked={selectedItem.value === item.value}
								onChange={() => handleSelect(item.value)}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SurveyFormMobile;
