import TriangleIcon from '../../TriangleIcon/TriangleIcon';
import SurveyItem from '../SurveyItem/SurveyItem';

import styles from './SurveyFormMobile.module.scss';

const SurveyFormMobile = ({
	selectedItem,
	isOpen,
	toggleMenu,
	items,
	handleSelect,
}) => {
	return (
		<div className={styles.surveyFormMobile}>
			<div className={styles.optionsTaskMobileContainer}>
				<div className={styles.optionsTaskMenu} onClick={toggleMenu}>
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
					className={`${styles.optionsTaskMobile} ${
						isOpen ? styles.visibleMenu : styles.hiddenMenu
					}`}
				>
					{items.map((item) => (
						<li
							key={item.id}
							className={styles.optionTaskMobile}
							onClick={() => handleSelect(item.value)}
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
