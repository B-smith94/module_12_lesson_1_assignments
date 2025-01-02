// Task 3
import { useState, useContext } from "react";
import useInventory from "../hooks/useInventory";
import { useNavigate } from "react-router-dom";;
import ProductContext from "../context/ProductContext";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const NewProductForm = () => {
    const {fetchProducts, addProduct} = useInventory();
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState('');
    const { products } = useContext(ProductContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(newProduct);
        console.log(fetchProducts());
        navigate('/')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="productInput" className="mb-3">
                                <Form.Label>Product</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Product Name"
                                    value={newProduct}
                                    onChange={(e) => setNewProduct(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Submit
                            </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewProductForm;

