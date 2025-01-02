// Task 1
import React from 'react';

const ContactContext = React.createContext(
    { contacts: [
        {
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        isSelected: false
    }, {
        name: 'Carol Whilte',
        email: 'cwhite@hotmail.com',
        isSelected: false
    }, {
        name: 'Tim Drake',
        email: 'tdrake@gotham.net',
        isSelected: false
    }], setContacts: () => {} })

export default ContactContext;