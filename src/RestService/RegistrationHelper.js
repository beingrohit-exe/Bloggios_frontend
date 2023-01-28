import axios from "axios";

export const REGISTRATION_BASE = 'http://localhost:7000';

export const registrationAxios = axios.create({
    baseURL : REGISTRATION_BASE
})