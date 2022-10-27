import React from 'react';
import ItemDescriptionDetail from '../ItemDescriptionDetail';

import { IDescriptionDetail } from './interfaces';
import './styles.css';

function DescriptionDetail({ product }: IDescriptionDetail) {
  return (
    <div>
      <ItemDescriptionDetail label="Marca" value={product.brand} />
      <ItemDescriptionDetail label="Modelo" value={product.model} />
      <ItemDescriptionDetail label="Precio" value={product.price} />
      <ItemDescriptionDetail label="CPU" value={product.brand} />
      <ItemDescriptionDetail label="RAM" value={product.cpu} />
      <ItemDescriptionDetail label="Sistema operativo" value={product.os} />
      <ItemDescriptionDetail label="Resolucion" value={product.displayResolution} />
      <ItemDescriptionDetail label="Batería" value={product.battery} />
      {product.primaryCamera && product.primaryCamera.length > 0 && (
        <ItemDescriptionDetail label="Cámara principal" value={product.primaryCamera[0]} />
      )}
      {product.primaryCamera && product.primaryCamera.length > 0 && (
        <ItemDescriptionDetail label="Cámara secundaria" value={product.secondaryCmera[0]} />
      )}
      <ItemDescriptionDetail label="Cámara secundaria" value={product.secondaryCmera[0]} />
      <ItemDescriptionDetail label="Dimensiones" value={product.dimentions} />
      <ItemDescriptionDetail label="Peso" value={product.weight} />
    </div>
  );
}

export default DescriptionDetail;
