import axios from 'axios';

const API_BASE_URL = 'https://localhost:7228/api/Target';

const experienceService = {
  async getDefaultTargets(targetId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/GetDefaultTargets`, {
        params: { targetId }
      });
      return response.data.response;
    } catch (error) {
      console.error('API çağrısı sırasında bir hata oluştu:', error);
      throw error;
    }
  },
};

export default experienceService;