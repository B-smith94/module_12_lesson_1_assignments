import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './component/ContactList';
import ContactDetails from './component/ContactDetails';
import ContactContext from './context/ContactContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [contacts, setContacts] = useState([
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
}]) 

  return (                        
    <ContactContext.Provider value={{ contacts, setContacts }}>  
      <Router>
        <Routes>
          <Route path='/' element={<ContactList/>}/>
          <Route path='/contact-details' element={<ContactDetails/>}/>
        </Routes>
      </Router>
    </ContactContext.Provider>
  )
}

export default App