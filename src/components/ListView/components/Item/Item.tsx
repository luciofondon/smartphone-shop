import React from 'react';
import { Link } from 'react-router-dom';

import { IItem } from './interfaces';
import './styles.css';

const Item = ({ product }: IItem) => {
  return (
    <div className="item">
      <Link to={`/detail/${product.id}`}>
        <div className="img">
          {' '}
          <img height={110} width={80} src={product.imgUrl} />
        </div>
        <div className="detail">
          <div className="model">{product.model}</div>
          <div className="brand">{product.brand}</div>
          {product.price && <div className="price"> {product.price}€</div>}
        </div>
      </Link>
    </div>
  );
};

export default Item;
