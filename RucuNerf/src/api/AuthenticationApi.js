import axios from 'axios';

export default {
    register(username, password, email) {
        return axios.post(
            '/register/', { username, password, email}
        );
    },
    login(username, password) {
        return axios.post(
            '/login/', { username, password}
        );
    }
}