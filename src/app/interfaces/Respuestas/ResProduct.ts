import { ProductI } from '../Product';

export interface ResProductI {
    message: String;
    product: ProductI;
}

export interface ResProductsI {
    message: String;
    product: ProductI[];
}