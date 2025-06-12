import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('https://product-server-json.onrender.com/products');
      setProducts(res.data);
    } catch (e) {
      console.error('Failed to fetch products:', e);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
