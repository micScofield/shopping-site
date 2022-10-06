import { useContext } from 'react';

import { ProductContext } from 'contexts/product.context';
import ShopCategory from './ShopCategory';

function Shop() {
  const { products } = useContext(ProductContext);

  console.log(products);
  return (
    <div>
      {products &&
        products.map((productCategory) => {
          return (
            <ShopCategory
              key={productCategory.title}
              productCategory={productCategory}
            />
          );
        })}
    </div>
  );
}

export default Shop;
