import { api } from './api';

export const listNotes = async () => {
    const response = await api.get('/notes');
    const data = response.json();
    return data;
}