import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { Product } from "./Product";

export interface ProductsRepository {
    get(filter?: string): Promise<Either<DataError, Product[]>>;
}