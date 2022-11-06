import axios from 'axios';

const URL = 'http://localhost:5000';

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/create`, data);
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/list`);
  } catch (error) {
    console.log('Error in gestUsers: ', error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log('Error in getUser api ', error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log('Error in editUser api ', error);
  }
};

export const deleteUsr = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log('Error in deleteUsr api ', error);
  }
};
