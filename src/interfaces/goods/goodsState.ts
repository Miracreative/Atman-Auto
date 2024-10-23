import type { ProductsData } from '@/types/product';

export interface IGoodsState {
	products: ProductsData[];
	loading: boolean;
	error: string | null;
	filterMainParam: number[];
	filterAllParam: number[];
	firstFilter: [];
	isMobile: boolean;
	flag: boolean;
}
