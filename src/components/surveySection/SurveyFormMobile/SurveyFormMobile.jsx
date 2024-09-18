import { TriangleIcon } from '../../TriangleIcon/TriangleIcon';
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
	// if (!selectedItem) {
	// 	return null; // или можно вернуть какой-то компонент-заглушку
	// }

	return (
		<div className={styles.formMobile}>
			<div className={styles.optionsMobileContainer}>
				<div className={styles.optionsMenuMobile} onClick={toggleMenu}>
					<div className={styles.optionsSelected}>
						<SurveyItem
							id={selectedItem.id}
							value={selectedItem.value}
							checked={true}
							onChange={() => {}}
						/>
						<div className={styles.texts}>
							<p>{selectedItem.text}</p>
							<p>{selectedItem.extraText}</p>
						</div>
					</div>
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
							onClick={handleCloseMenu}
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
