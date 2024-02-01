import axios from 'axios';

let API_URL = 'http://localhost:8080/api/vehiculos/page';


const getVehiclesPaginated = async (page, size, sort) => {
    const params = {
        page,
        size, sort
    };
    try {
        const response = await axios.post(API_URL, null, { params });
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const insertVehicle = async (vehicle) => {
    try {
        const response = await axios.post('http://localhost:8080/api/vehiculos', vehicle);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export default {
    getVehiclesPaginated,
    insertVehicle
};