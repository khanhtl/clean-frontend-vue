import { IProductsRepository } from "./interface/ProductsRepository";
import { Product } from "./entity/Product";
import { Either } from "../../common/domain/entity/Either";
import { DataError } from "../../common/domain/entity/DataError";
import { IGetProductsUseCase } from "./interface/IGetProductsUseCase";

export class GetProductsUseCase implements IGetProductsUseCase {
    private productRepository: IProductsRepository;

    constructor(productRepository: IProductsRepository) {
        this.productRepository = productRepository;
    }

    execute(filter?: string): Promise<Either<DataError, Product[]>> {
        return this.productRepository.get(filter);
    }
}