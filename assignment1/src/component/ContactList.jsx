// Task 2
import { useContext } from "react";
import ContactContext from "../context/ContactContext";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

const ContactList = () => {
    const { contacts, setContacts } = useContext(ContactContext);
    const navigate = useNavigate();

    const handleClick = (contact) => {
        const selectContact = contacts.findIndex((name) => contact)
        setContacts([contacts[selectContact]]);
        navigate('/contact-details');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Contacts</h1>
                    <ListGroup>
                        {contacts.map(contact => (
                            <ListGroup.Item key={contact.name} onClick={handleClick} className='d-flex justify-content-between align-items-center shadow' style={{cursor: 'pointer'}}>
                                {contact.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactList;