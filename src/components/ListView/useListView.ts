import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { IProduct } from "./components/Item/interfaces";



const useListView = () => {
    //const [products, setProducts] = useState<IProduct[]>([]);
    const [productsFilter, setProductsFilter] = useState<IProduct[]>([]);
    const [textFilter, setTextFilter] = useState<string>("");
    const { data } = useFetch<IProduct[] | []>(`https://front-test-api.herokuapp.com/api/product`, "list", [])

    useEffect(() => {
        // (async () => {
        //     const response = await fetch(`https://front-test-api.herokuapp.com/api/product`);
        //     const responseJson = await response.json();
        //     setProducts(responseJson)
        //     setProductsFilter(responseJson)
        // })();
    }, []);

    useEffect(() => {
        setProductsFilter(data.filter(product => product.brand.toLocaleLowerCase().startsWith(textFilter.toLocaleLowerCase())
            || product.model.toLocaleLowerCase().startsWith(textFilter.toLocaleLowerCase())))
    }, [textFilter, data]);



    const handleChangeFilter = (text: string) => {
        setTextFilter(text)
    }

    return {
        states: {
            products: productsFilter,
        },
        actions: {
            handleChangeFilter
        }
    }
}

export default useListView;