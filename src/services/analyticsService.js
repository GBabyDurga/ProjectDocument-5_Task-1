import axios from 'axios';

const API_BASE_URL = 'https://your-api-url/api';

export const fetchAnalytics = async (timeRange) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/analytics`, {
      params: { timeRange }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching analytics:', error);
    throw error;
  }
};