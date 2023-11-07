import { EnittyState } from "../../../common/domain";
import { Product } from "..";
export type ProductsState = EnittyState<Product>;

export const productsInitialState: ProductsState = {
    kind: "LoadingState",
    searchTerm: "",
};