import styles from './GoodsFilterItem.module.scss';

const GoodsFilterItem = ({ name, id, value, checked, onChange, text }) => {
	return (
		<div className={styles.item}>
			<input
				type="checkbox"
				name={name}
				id={id}
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={id}>{text}</label>
		</div>
	);
};

export default GoodsFilterItem;
