import { DataError, Ploc } from "../../common";
import { IGetProductsUseCase } from "../domain/interface";
import { productsInitialState, ProductsState } from "../domain/entity/ProductsState";

export class ProductsPloc extends Ploc<ProductsState> {
    constructor(private getProductsUseCase: IGetProductsUseCase) {
        super(productsInitialState);
    }

    async search(searchTerm: string) {
        const productResult = await this.getProductsUseCase.execute(searchTerm);

        productResult.fold(
            error => this.changeState(this.handleError(searchTerm, error)),
            products =>
                this.changeState({
                    kind: "LoadedState",
                    products,
                    searchTerm,
                })
        );
    }

    private handleError(searchTerm: string, error: DataError): ProductsState {
        switch (error.kind) {
            case "UnexpectedError": {
                return {
                    searchTerm,
                    kind: "ErrorState",
                    error: "Sorry, an error has ocurred. Please try later again",
                };
            }
        }
    }
}