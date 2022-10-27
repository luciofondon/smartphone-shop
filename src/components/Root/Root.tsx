import React, { createContext } from 'react';
import { Outlet } from "react-router-dom";

import Header from '../Header';
import { IProductContext } from './interfaces';
import useRoot from './useRoot';

export const ProductContext = createContext<IProductContext>({
    count: 0,
    handleAdd: (product) => { }
})

const Root = () => {
    const {
        states: { countProducts },
        actions: { handleClickAddProduct }
    } = useRoot();

    return (
        <ProductContext.Provider value={{ count: countProducts, handleAdd: handleClickAddProduct }}>
            <Header />
            <Outlet />
        </ProductContext.Provider>
    );
}

export default Root;
