import RedDot from './../../RedDot/RedDot.jsx';

import styles from './CharacteristicItem.module.scss';

const CharacteristicItem = ({ label, value }) => {
	if (!value) return null;

	return (
		<li className={styles.item}>
			<div className={styles.redDot}>
				<RedDot />
			</div>
			<p className={styles.itemText}>
				{label}: <span>{value}</span>
			</p>
		</li>
	);
};

export default CharacteristicItem;
