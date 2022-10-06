import SHOP_DATA from 'data/products';

const { createContext, useState, useEffect } = require('react');

export const ProductContext = createContext({
  products: null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const value = { products };

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
