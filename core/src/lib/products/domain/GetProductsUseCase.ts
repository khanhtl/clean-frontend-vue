import { ProductsRepository } from "./ProductsRepository";
import { Product } from "./Product";
import { Either } from "../../common/domain/Either";
import { DataError } from "../../common/domain/DataError";

export class GetProductsUseCase {
    private productRepository: ProductsRepository;

    constructor(productRepository: ProductsRepository) {
        this.productRepository = productRepository;
    }

    execute(filter?: string): Promise<Either<DataError, Product[]>> {
        return this.productRepository.get(filter);
    }
}