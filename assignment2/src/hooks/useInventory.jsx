// Task 1
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
const useInventory = () => {
    const { products, setProducts } = useContext(ProductContext)

    const fetchProducts = () => {
        return products;
    };

    const addProduct = (product) => {
        fetchProducts();
        const newProduct = [product]
        setProducts([...products, newProduct]);
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