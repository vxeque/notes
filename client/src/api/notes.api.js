import axios from 'axios'

const notesApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/notes/api/v1/notes/'
})

export const getAllNotes = () => notesApi.get('/')

export const getNotes = (id) => notesApi.get(`/${id}/`)

export const createNote = (notes) => notesApi.post('/', notes)

export const deleteNote = (id) => notesApi.delete(`/${id}`)

export const updateNote = (id, notes) => notesApi.put(`/${id}/`, notes)
