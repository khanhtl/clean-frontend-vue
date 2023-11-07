import { Either, DataError } from "core/src/lib/common";
import { Product } from "../entity/Product";

export interface IGetProductsUseCase {
    execute(filter?: string): Promise<Either<DataError, Product[]>>;
}