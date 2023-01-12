import axiosrequest from "../utils/config/axios.config";

export function getRandomUser() {
    //axiosrequest.post('/login', body)
    return axiosrequest.get('/', {
        validateStatus: function (status) {
            return status < 500
        }
    })
}

