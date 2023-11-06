import { ProductInMemoryRepository } from "../products/data";
import { GetProductsUseCase } from "../products/domain";
import { ProductsPloc } from "../products/presenter/ProductsPloc";

function provideProductsPloc(): ProductsPloc {
    const productRepository = new ProductInMemoryRepository();
    const getProductsUseCase = new GetProductsUseCase(productRepository);
    const productsPloc = new ProductsPloc(getProductsUseCase);

    return productsPloc;
}


export const plocsCollection = {
    provideProductsPloc,
};