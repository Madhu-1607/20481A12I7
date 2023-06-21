import axios from 'axios';

export async function getAllTrains() {
  try {
    const response = await axios.get('http://104.211.219.98/train/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching train data:', error);
    return [];
  }
}

export async function loginUser(data) {
  try {
    const response = await axios.post('http://104.211.219.98/train/auth', data);
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
}
