import axios from 'axios';

export default {
    getNerfModelsByUser() {
        return axios.get(
            `nerf-models/user/`
        );
    },
    getNerfModel(nerfId) {
        return axios.get(
            `nerf-objects/${nerfId}`
        );
    },

}