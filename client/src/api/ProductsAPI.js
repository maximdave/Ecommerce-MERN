import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);

  const getProducts = async () => {
    const res = await axios.get('/api/products');
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products: [products, setProducts],
  };
}

export default ProductsAPI;
