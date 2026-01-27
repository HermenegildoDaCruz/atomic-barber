import { products } from "../data/products";
import ProductItem from "./ProductItem";
export default function Products() {
    return (
        <section className="products-section container">
            <h2 className="heading-secondary center mb-8">Nossos Produtos</h2>
            <ul className="products-list grid grid-3">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </section>
    );
}