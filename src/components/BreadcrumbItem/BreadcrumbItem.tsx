import Link, { LinkProps } from 'next/link';

import styles from './BreadcrumbItem.module.scss';

export type BreadcrumbItemProps = Omit<LinkProps, 'href'> & {
	href?: LinkProps['href'];
	isLast?: boolean;
	title: string;
};

export type BreadcrumbsProps = {
	items: BreadcrumbItemProps[];
};
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
