import { registrationAxios } from "./RegistrationHelper"

export const Register = (register) => {
    return registrationAxios.post('/api/registration', register).then((response)=> response.data);
}