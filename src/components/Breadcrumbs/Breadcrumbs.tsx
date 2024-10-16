import React from 'react';

import ArrowIcon from '../ArrowIcon/ArrowIcon';

import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';

import type { BreadcrumbsProps } from '@/types/breadcrumbs.ts';

import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	return (
		<nav className={styles.container}>
			{items.map((item, key) => (
				<React.Fragment key={key}>
					<BreadcrumbItem {...item} isLast={key === items.length - 1} />
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
