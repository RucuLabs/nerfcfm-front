import axios from 'axios';

export default {
    getProcessedDataByUser() {
        return axios.get(
            '/processed-data/user/'
        );
    },
    getProcessedData(dataId) {
        return axios.get(
            `/processed-data/${dataId}`
        );
    }
}