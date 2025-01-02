//Task 2
import useInventory from "../hooks/useInventory";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";


const ProductList = () => {
    const { deleteProduct } = useInventory();
    const { products } = useContext(ProductContext);
    const navigate = useNavigate();

    console.log(products);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Products:</h1>
                    <ListGroup>
                        {products.map((product, index) => [
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center shadow">
                                {index +1}. {product}
                                <Button variant="danger" onClick={() => deleteProduct(product)}>
                                    Delete Product
                                </Button>
                            </ListGroup.Item>
                        ])}
                    </ListGroup>
                </Col>
            </Row>
            <Button onClick={() => navigate('add-product')} variant="success">Add New Product</Button>
        </Container>
    )
}

export default ProductList;