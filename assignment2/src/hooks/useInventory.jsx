// Task 1
import { useState } from "react";
const useInventory = () => {
    const [products, setProducts] = useState(['PS5', 'Xbox', 'Switch'])

    const fetchProducts = () => {
        return products;
    };

    const addProduct = (product) => {
        setProducts(products.push(product));
    };

    const deleteProduct = (product) => {
        const index = products.indexOf(product);
        const deletedProduct = products.splice(index, 1)
        setProducts(products.filter(product => product != deletedProduct));
    };

    return {fetchProducts, addProduct, deleteProduct};
}

export default useInventory;