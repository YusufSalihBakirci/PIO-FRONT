import api from './index'

export const getGamificationList = () => {
  return api.get('/gamification/list')
}


