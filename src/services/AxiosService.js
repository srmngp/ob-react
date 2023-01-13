import axiosRequest from "../utils/config/axios.config";

export function getRandomUser() {
    //axiosrequest.post('/login', body)
    return axiosRequest.get('/', {
        validateStatus: function (status) {
            return status < 500
        }
    })
}

