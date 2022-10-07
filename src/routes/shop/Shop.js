import { useContext } from 'react';

import { ProductContext } from 'contexts/product.context';
import CardContainer from 'components/card-container/CardContainer';

function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products &&
        products.map((productCategory) => {
          for (let i = 0; i < productCategory.items.length; i++) {
            productCategory.items[i]['footer'] = {
              value1: productCategory.items[i].name,
              value2: `${productCategory.items[i].price} ${
                productCategory.items[i].currency
                  ? productCategory.items[i].currency
                  : ''
              }`,
            };
            productCategory.items[i]['overlay'] = ['Add to Cart']
            productCategory.items[i]['overlayPosition'] = 'bottom'
          }
          console.log(productCategory)
          return (
            <CardContainer
              key={productCategory.title}
              title={productCategory.title}
              cards={productCategory.items}
              grid='true'
            />
          );
        })}
    </div>
  );
}

export default Shop;
