import Link from 'next/link';

import type { BreadcrumbItemProps } from '@/types/breadcrumbs.ts';

import styles from './BreadcrumbItem.module.scss';

export const BreadcrumbItem = ({
	title,
	href,
	isLast,
	...props
}: BreadcrumbItemProps) => {
	return href ? (
		<Link href={href} {...props}>
			{title}
		</Link>
	) : (
		<span className={isLast ? styles.last : ''}>{title}</span>
	);
};
