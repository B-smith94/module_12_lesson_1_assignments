// Task 2
import { useContext, useState } from "react";
import ContactContext from "../context/ContactContext";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

const ContactList = () => {
    const { contacts, setContacts } = useContext(ContactContext);
    const { contact, setContact} = useState('');
    const navigate = useNavigate();


    return (
        <Container>
            <Row>
                <Col>
                    <h1>Contacts</h1>
                    <ListGroup>
                        {contacts.map(contact => (
                            <ListGroup.Item key={contact.name} className='d-flex justify-content-between align-items-center shadow' style={{cursor: 'pointer'}}>
                                {contact.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactList;