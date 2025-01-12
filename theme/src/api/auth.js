import { LoginApi } from './index'
import CryptoJS from "crypto-js"

export const loginUser = (email, password) => {
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    return LoginApi.post('/Login/login', {
        email: email,
        password: hashedPassword
    });
}

export const logout = () => {
  return api.post('/auth/logout')
}

export const register = (userData) => {
  return api.post('/auth/register', userData)
}
