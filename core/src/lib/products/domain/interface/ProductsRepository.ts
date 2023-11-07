import { DataError } from "../../../common/domain/entity/DataError";
import { Either } from "../../../common/domain/entity/Either";
import { Product } from "../entity/Product";

export interface IProductsRepository {
    get(filter?: string): Promise<Either<DataError, Product[]>>;
}