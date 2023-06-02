import axios from 'axios';

export default class ContactService {
    async getAllContacts() {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + '/contact');
            return response.data;
        } catch (error) {
            return [];
        }
    }

    async getOneContactById(id) {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + '/contact/' + id);
            return response.data;
        } catch (error) {
            return [];
        }
    }

    async createNewContact(contact) {
        try {
            const response = await axios.post(process.env.REACT_APP_BASE_URL + '/contact', contact);
            return response.data;
        } catch (error) {
            return [];
        }
    }

    async updateOneContact(id, contact) {
        try {
            const response = await axios.put(process.env.REACT_APP_BASE_URL + '/contact/' + id, contact);
            return response.data;
        } catch (error) {
            return [];
        }
    }

    async deleteContact(id) {
        try {
            const response = await axios.delete(process.env.REACT_APP_BASE_URL + '/contact/' + id);
            return response.data;
        } catch (error) {
            return [];
        }
    }
}