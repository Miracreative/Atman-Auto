import type { ProductsData } from '@/types/product';

export interface GoodsState {
	products: ProductsData[];
	loading: boolean;
	error: string | null;
	filterMainParam: number[];
	firstFilter: [];
	isMobile: boolean;
	flag: boolean;
}
