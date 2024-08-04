// ContactList.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactList({ contacts }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Contact List</h2>
      <ul className="list-group">
        {contacts.map((contact, index) => (
          <li key={index} className="list-group-item">
            <p className="mb-1"><strong>Name:</strong> {contact.name}</p>
            <p className="mb-1"><strong>Phone:</strong> {contact.phone}</p>
            <p className="mb-1"><strong>Email:</strong> {contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
