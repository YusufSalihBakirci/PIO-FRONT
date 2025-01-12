import api from './index'

export const getExternalExperiencesList = () => {
  return api.get('/external-experiences/list')
}


