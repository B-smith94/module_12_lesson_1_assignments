import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import ContactContext from "../context/ContactContext";
import { Container } from 'react-bootstrap';

const ContactDetails = () => {
    const { contacts } = useContext(ContactContext);

    return (
        <Container>
            {contacts.map(contact => (
                <>
                    <h1>Details for {contact.name}</h1>
                    <p>Email: {contact.email}</p>
                </>
            ))}
           
        </Container>
    )
}

export default ContactDetails