import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import ContactService from '../services/contact.service'
import Moment from 'react-moment';
import moment from 'moment'

export default function ContactUpdate() {
    var contactService = new ContactService(); 

    let navigate = useNavigate();

    const [contactId, setContactId] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [officePhoneNumber, setOfficePhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDOB] = useState('');

    useEffect(() => {
        setContactId(localStorage.getItem('contactId'))
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setPhoneNumber(localStorage.getItem('phoneNumber'))
        setOfficePhoneNumber(localStorage.getItem('officePhoneNumber'))
        setEmail(localStorage.getItem('email'))
        const dob = moment(localStorage.getItem('dateOfBirth'), 'DD/MM/YYYY').format('YYYY-MM-DD')
        setDOB(dob)
    }, []);

    const updateContact = () => {
        contactService.updateOneContact(contactId, { contactId, firstName, lastName, phoneNumber, officePhoneNumber, email, dateOfBirth })
        .then((response) => {
            navigate('/')
        })
    }

    return (

        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <input placeholder='Phone Number' value={phoneNumber} type='tel' onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Office Phone Number</label>
                    <input placeholder='Office Phone Number' value={officePhoneNumber} type='tel' onChange={(e) => setOfficePhoneNumber(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <input placeholder='Date of Birth' value={dateOfBirth} onChange={(e) => setDOB(e.target.value)} type="date" />
                </Form.Field>

                <Button type='submit' onClick={updateContact}>Update</Button>
            </Form>
        </div>
    )
}