import api from './index'

export const getUserProfile = () => {
  return api.get('/user/profile')
}

export const updateUserProfile = (data) => {
  return api.put('/user/profile', data)
}

export const changePassword = (passwords) => {
  return api.post('/user/change-password', passwords)
}
