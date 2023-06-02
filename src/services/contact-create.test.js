import axios from 'axios'
import ContactService from './contact.service'

jest.mock('axios');


it('should create a contact', () => {
    const contact = { "contactId": 1, "firstName": "TestFirstname", "lastName": "TestSurname", 
    "dateOfBirth": "1991-04-31", "phoneNumber": "073-000-0000", "officePhoneNumber": "011-000-0000", "email": "test@test.co.za" };
    const resp = { data: contact };
    axios.post.mockResolvedValue(resp);

    const service = new ContactService();

    return service.createNewContact({ contact: contact }).then(data => expect(data).toEqual(contact));
});

it('should throw an error when creating contact', () => {

    var error = new ErrorEvent('Contact to be created is null');
    axios.post.mockImplementation(() =>{
        throw error;
    })

    const service = new ContactService();
    
    return service.createNewContact({contact:null}).catch(error => expect(error).toEqual(error));
})

it('should update a contact', () => {
    const contactId = 1;
    const contact = { "contactId": contactId, "firstName": "TestFirstnameChanged", "lastName": "TestSurnameChanged", 
    "dateOfBirth": "1991-04-31", "phoneNumber": "073-000-1111", "officePhoneNumber": "011-000-1111", "email": "test@test.co.za" };
    
    const resp = { data: true };

    axios.put.mockResolvedValue(resp);

    const service = new ContactService();

    return service.updateOneContact(contactId, contact).then(data => expect(data).toEqual(true));
});

it('should throw an error if update contact fails', () => {

    var error = new ErrorEvent('Contact to be updated is null');

    axios.put.mockImplementation(() =>{
        throw error;
    })
  
    const service = new ContactService();
    
    return service.updateOneContact(1, null).catch(error => expect(error).toEqual(error));
  })

  it('should delete a contact', () => {
    const contactId = 1;
   
    const resp = { data: true };

    axios.delete.mockResolvedValue(resp);

    const service = new ContactService();

    return service.deleteContact(contactId).then(data => expect(data).toEqual(true));
});

it('should throw an error if delete contact fails', () => {

    var error = new ErrorEvent('The Contact record couldn\'t be found');

    axios.delete.mockImplementation(() =>{
        throw error;
    })
  
    const service = new ContactService();
    
    return service.deleteContact(1).catch(error => expect(error).toEqual(error));
  })

  it('should get contacts', () => {
    const contact = { "contactId": 1, "firstName": "TestFirstname", "lastName": "TestSurname", "dateOfBirth": "1991-04-31", "phoneNumber": "073-000-0000", "officePhoneNumber": "011-000-0000", "email": "test@test.co.za" };
    const resp = { data: contact };
    axios.get.mockResolvedValue(resp);

    const service = new ContactService();

    return service.getAllContacts().then(data => expect(data).toEqual(contact));
});