import { registrationAxios } from "./RegistrationHelper"

export const Register = (register) => {
    return registrationAxios.post('/api/registration', register).then((response)=> response.data);
}

export const CheckUsername = (username) => {
    return registrationAxios.get('/api/registration/exists-username/'+username).then((response)=> response.data);
}

export const CheckEmail = (email) => {
    return registrationAxios.get('/api/registration/exists-email/'+email).then((response)=> response.data);
}