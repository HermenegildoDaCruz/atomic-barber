import { products } from "../data/products";
import ProductItem from "./ProductItem";
export default function Products() {
    return (
        <section className="products-section container" id="products">
            <h2 className="heading-secondary">Nossos Produtos</h2>
            <ul className="products-list grid grid-4">
                {products.map(product => (
                    <ProductItem key={product.id} item={product} />
                ))}
            </ul>
        </section>
    );
}