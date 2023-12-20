import axios from 'axios';

export default {
    getNerfObjectsByUser() {
        return axios.get(
            `nerf-objects/user/`
        );
    },
    getNerfObjectInfo(objId) {
        return axios.get(
            `nerf-objects/${objId}`
        );
    },
    getNerfObjectObj(objId) {
        return axios.get(
            `nerf-objects/${objId}/object/`
        );
    },
    getNerfObjectMaterial(objId) {
        return axios.get(
            `nerf-objects/${objId}/material/`
        );
    },
    getNerfObjectTexture(objId) {
        return axios.get(
            `nerf-objects/${objId}/texture/`
        );
    },

}