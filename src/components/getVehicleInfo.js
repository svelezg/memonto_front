import axios from 'axios';

const baseURL = "http://18.216.37.239/api/v1/";
export const getReviewId = Id => {
    const auth = localStorage.userToken;
    return axios
        .get(baseURL + 'review/all/vehicle/' + Id,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + auth,
            },
        })
        .then(res => {
            return res.data;
        })
        .catch(console.log)
};

export const getVehicleAll = () => {
    const auth = localStorage.userToken;
    return axios
        .get(baseURL + 'vehicle/all',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                }
            })
        .then(res => {
            return res.data;
        })
        .catch(console.log)
};
export const getVehiclePlate = plate => {
    const auth = localStorage.userToken;
    return axios
        .get(baseURL + 'vehicle/plate/' + plate,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                },
            })
        .then(res => {
            return res.data;
        })
        .catch(console.log)
};
export const getAverageVehicle = Id => {
    const auth = localStorage.userToken;
    return axios
        .get(baseURL + 'rating/vehicle/average/' + Id,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                },
            })
        .then(res => {
            return {Average: res.data.Average.toFixed(1)};
        })
        .catch(console.log)
};

export const getDriverInfo = Id => {
    const auth = localStorage.userToken;
    return axios
        .get(baseURL + 'users/' + Id,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + auth,
                },
            })
        .then(res => {
            const newData = {text: res.data.text,
                createdAt: res.data.createdAt.substring(1, 10)};
            return newData;
        })
        .catch(console.log)
};

