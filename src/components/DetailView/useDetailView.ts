import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProductAdd } from '../Root/interfaces';
import { ProductContext } from '../Root/Root';

import { IProductDetail, IUseDetailViewResponse } from './interfaces';

const BASE_URL = process.env.REACT_APP_ENDPOINT;

const useDetailView = (): IUseDetailViewResponse => {
  const [product, setProduct] = useState<IProductDetail | null>(null);
  const { handleAdd } = useContext(ProductContext);
  const { productId } = useParams();

  const handleClickAddProduct = (product: IProductAdd) => {
    handleAdd(product);
  };

  useEffect(() => {
    (async () => {
      const data = await fetch(`${BASE_URL}/api/product/${productId}`);
      setProduct(await data.json());
    })();
  }, [productId]);

  return {
    states: {
      product,
    },
    actions: {
      handleClickAddProduct,
    },
  };
};

export default useDetailView;
