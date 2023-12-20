import axios from 'axios';

export default {
    getDataByUser() {
        return axios.get(
            '/data/user/'
        );
    },
    getData(dataId) {
        return axios.get(
            `/data/${dataId}`
        );
    }
}