import React from 'react';

import ArrowIcon from '../ArrowIcon/ArrowIcon';

import {
	BreadcrumbItem,
	BreadcrumbsProps,
} from '../BreadcrumbItem/BreadcrumbItem';

import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	return (
		<nav className={styles.container}>
			{items.map((item, key) => (
				<React.Fragment key={key}>
					<BreadcrumbItem {...item} />
					{key < items.length - 1 && ( // Проверяем, не последний ли это элемент
						<div className={styles.arrowIconContainer}>
							<ArrowIcon />
						</div>
					)}
				</React.Fragment>
			))}
		</nav>
	);
};
