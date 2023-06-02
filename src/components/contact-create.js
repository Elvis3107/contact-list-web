import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import ContactService from '../services/contact.service'


export default function ContactCreate() {

    var contactService = new ContactService(); 

    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [officePhoneNumber, setOfficePhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDOB] = useState('');

    const postData = () => {
        contactService.createNewContact({ firstName, lastName, phoneNumber, officePhoneNumber, email, dateOfBirth }).then((response) => {
            navigate('/')
        })
    }

    return (

        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <input placeholder='Phone Number' type='number' onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Office Phone Number</label>
                    <input placeholder='Office Phone Number' type='number' onChange={(e) => setOfficePhoneNumber(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <input placeholder='Date of Birth' onChange={(e) => setDOB(e.target.value)} type="date" />
                </Form.Field>

                <Button type='submit' onClick={postData}>Create</Button>
            </Form>
        </div>
    )
}