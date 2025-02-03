import axios from 'axios';

const API_BASE_URL = 'http://api.experia.com/api/Target';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIm5iZiI6MTcyNzc4MDM0OSwiZXhwIjoxNzI3NzgzOTQ5LCJpYXQiOjE3Mjc3ODAzNDl9.Ql0NvOpeKtQq_tfl1VFIjWroksB8_wDXOdpOv03eZZc';

export const addExperience = async (name, configJson, targetType, description, companyId) => {
  try {
    const payload = {
      id: 0,
      targetId: 0,
      defaultTargetId: 0,
      name: name,
      configJson: configJson,
      targetJsPath: "string",
      targetType: targetType,
      description: description,
      companyId: companyId,
      createdUser: 0,
      updatedUser: 0,
      createdDate: "2025-01-26T21:24:35.367Z",
      updatedDate: "2025-01-26T21:24:35.367Z",
      isActive: true
    };

    const response = await axios.post(`${API_BASE_URL}/CreateTarget`, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('API çağrısı hatası:', error);
    throw error;
  }
};

export const getExperienceByID = async (targetId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetTargetById`, {
      params: { targetId }
    });
    return response.data.response;
  } catch (error) {
    console.error('API çağrısı hatası:', error);
    throw error;
  }
};

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

  getExperienceById(targetId) {
    return Promise.resolve({
      targetId: targetId,
      name: "Experience " + targetId,
      description: "Description for experience " + targetId,
      isActive: true
    });
  }
};

export default experienceService;