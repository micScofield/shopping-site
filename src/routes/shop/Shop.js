import { useContext } from 'react';

import { ProductContext } from 'contexts/product.context';
import CardContainer from 'components/card-container/CardContainer';
import { CartContext } from 'contexts/cart.context';

function Shop() {
  const { products } = useContext(ProductContext);
  const { addItemToCart } = useContext(CartContext);

  const onOverlayClickHandler = (e, payload) => {
    const { id, imageUrl, name, price } = payload;
    addItemToCart({ id, imageUrl, name, price });
  };

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
            productCategory.items[i]['overlay'] = ['Add to Cart'];
            productCategory.items[i]['onOverlayClick'] = onOverlayClickHandler;
            productCategory.items[i]['overlayPosition'] = 'bottom';
            productCategory.items[i]['showOverlayByDefault'] = false;
          }
          return (
            <CardContainer
              key={productCategory.title}
              title={productCategory.title}
              cards={productCategory.items}
              grid='true'
              large='true' 
            />
          );
        })}
    </div>
  );
}

export default Shop;
