
export const ProductCard = ({product}) => {
    return (
        <section className="productCard">
            <h3 className="productCard__name">{product.name}</h3>
            <div className="productCard__price">price: ${product.price}</div>
        </section>
    )
}