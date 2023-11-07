import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { Product } from "../entity/Product";

export interface IProductsRepository {
    get(filter?: string): Promise<Either<DataError, Product[]>>;
}