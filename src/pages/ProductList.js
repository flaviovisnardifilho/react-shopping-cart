import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
// import { products } from '../data';

export function ProductList({ products }) {
  const descriptionStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <div className='product-card' key={product.id}>
            <Link
              to={`${product.id}`}
              preventScrollReset={true}
              style={descriptionStyle}
            >
              <ProductCard
                id={product.id}
                src={product.src}
                productName={product.productName}
                avaiable={product.avaiable}
                description={product.description}
                price={product.price}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
