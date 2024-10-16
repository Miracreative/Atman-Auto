import { LinkProps } from 'next/link';

export type BreadcrumbItemProps = Omit<LinkProps, 'href'> & {
	href?: LinkProps['href'];
	isLast?: boolean;
	title: string;
};

export type BreadcrumbsProps = {
	items: BreadcrumbItemProps[];
};
