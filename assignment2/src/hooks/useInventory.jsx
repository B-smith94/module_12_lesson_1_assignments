// Task 1
import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
const useInventory = () => {
    const { products, setProducts } = useContext(ProductContext)

    const fetchProducts = () => {
        return products;
    };

    const addProduct = (product) => {
        fetchProducts();
        setProducts(products.push(product));
    };

    const deleteProduct = (product) => {
        fetchProducts();
        const index = products.indexOf(product);
        const deletedProduct = products.splice(index, 1)
        setProducts(products.filter(product => product != deletedProduct));
    };

    return {fetchProducts, addProduct, deleteProduct};
}

export default useInventory;