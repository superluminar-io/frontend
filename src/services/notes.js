import { api } from './api';

export const listNotes = async () => {
    const response = await api.get('/prod/notes');
    return response.data;
}