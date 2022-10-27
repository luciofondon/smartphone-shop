import React from 'react';
import { Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';

import { IActionDetail } from './interfaces';
import './styles.css';
import useActionDetail from './useActionDetail';

const ActionDetail = ({ product, handleClickAddProduct }: IActionDetail) => {
  const {
    states: { storage, color },
    actions: { handleSubmit, handleChange },
  } = useActionDetail({ product, handleClickAddProduct });

  return (
    <div className="action-form">
      <form onSubmit={handleSubmit}>
        <div className="form-select">
          <FormControl fullWidth>
            <InputLabel id="storage-label">Almacenamiento</InputLabel>
            <Select
              labelId="storage-label"
              label="Almacenamiento"
              name="storage"
              value={storage.toString()}
              onChange={handleChange}
            >
              {product.options.storages.map((storage) => (
                <MenuItem value={storage.code} key={storage.code}>
                  {storage.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="form-select">
          <FormControl fullWidth>
            <InputLabel id="color-label">Color</InputLabel>
            <Select
              labelId="color-label"
              label="Color"
              name="color"
              value={color.toString()}
              onChange={handleChange}
            >
              {product.options.colors.map((color) => (
                <MenuItem value={color.code} key={color.code}>
                  {color.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button type="submit">Añadir a la cesta</Button>
      </form>
    </div>
  );
};

export default ActionDetail;
