import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import ContactService from '../services/contact.service'



export default function ContactView() {
    var contactService = new ContactService(); 

    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        contactService.getAllContacts().then((response) => {
            setContactList(response);
        })
    }, [])

    const setData = (data) => {
        let { contactId, firstName, lastName, phoneNumber, officePhoneNumber, email, dateOfBirth } = data;
        localStorage.setItem('contactId', contactId);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('phoneNumber', phoneNumber)
        localStorage.setItem('officePhoneNumber', officePhoneNumber)
        localStorage.setItem('email', email)
        localStorage.setItem('dateOfBirth', new Date(dateOfBirth).toLocaleDateString())
    }

    const onDelete = (contactId) => {
        contactService.deleteContact(contactId).then(() => {
            getContactList();
        })
    }


    const getContactList = () => {
        contactService.getAllContacts().then((response) => {
            setContactList(response);
        })
    }

    return (
        <div>

            <Link to='/contact-create'>
                <a>Create Contact</a>
            </Link>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Office Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Email Address</Table.HeaderCell>
                        <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {contactList.map((data) => {
                        return (
                            <Table.Row key={data.contactId}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.phoneNumber}</Table.Cell>
                                <Table.Cell>{data.officePhoneNumber}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{new Date(data.dateOfBirth).toLocaleDateString()}</Table.Cell>
                                <Link to='/contact-update'>
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.contactId)}>Delete</Button>
                                </Table.Cell>

                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}