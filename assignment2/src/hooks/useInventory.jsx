// Task 1
import { useState } from "react";
const useInventory = () => {
    const [products, setProducts] = useState(['PS5', 'Xbox', 'Switch'])

    const fetchProducts = () => {
        return products;
    };

    const addProduct = (product) => {
        setProducts(prevProduct => ([
            ...prevProduct,
            product]))
    };

    const deleteProduct = (product) => {
        const filteredProducts = products.filter(() => product);
        setProducts(filteredProducts);
    };

    return {fetchProducts, addProduct, deleteProduct};
}

export default useInventory;