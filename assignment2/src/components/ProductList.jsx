//Task 2
import { useEffect } from "react";
import useInventory from "../hooks/useInventory";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const ProductList = () => {
    const { fetchProducts, deleteProduct } = useInventory();
    const products = fetchProducts();
    const navigate = useNavigate();




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