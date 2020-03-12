import axios from 'axios';

const baseURL = "http://18.216.37.239/api/v1/";

export const loginUser = user => {
    return axios
        .post(`${baseURL}signin`, {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('userToken', res.data["token"]);
            console.log('User: ' + user.email + ' logged in!');
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err.status;
        });
};

