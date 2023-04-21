import { api } from './api';

export const listNotes = async () => {
    const response = await api.get('/prod/notes');
    return response.data;
}

export const createNote = async (data) => {
    const response = await api.post('/prod/notes', data);
    return response.data;
  };