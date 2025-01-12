import api from './index'

export const getInlineExperiencesList = () => {
  return api.get('/inline-experiences/list')
}


