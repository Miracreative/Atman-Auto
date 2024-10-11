import React from 'react';

import styles from './GoodsFilterItem.module.scss';

const GoodsFilterItem = React.forwardRef(
	({ name, id, value, checked, onChange, text }, ref) => {
		return (
			<div className={styles.item}>
				<input
					type="checkbox"
					name={name}
					id={id}
					value={value}
					checked={checked}
					onChange={onChange}
					ref={ref}
				/>
				<label htmlFor={id}>{text}</label>
			</div>
		);
	},
);

export default GoodsFilterItem;
