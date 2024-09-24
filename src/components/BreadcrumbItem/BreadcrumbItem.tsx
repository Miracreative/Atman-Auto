import Link, { LinkProps } from 'next/link';

export type BreadcrumbItemProps = Omit<LinkProps, 'href'> & {
	href?: LinkProps['href'];
	title: string;
};

export type BreadcrumbsProps = {
	items: BreadcrumbItemProps[];
};
export const BreadcrumbItem = ({
	title,
	href,
	...props
}: BreadcrumbItemProps) => {
	return href ? (
		<Link href={href} {...props}>
			{title}
		</Link>
	) : (
		<span>{title}</span>
	);
};
