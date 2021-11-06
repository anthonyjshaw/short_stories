import axios from 'axios';

const url = (endpoint) => `/api/v1/stories${endpoint}`;

export const fetchStories = () => axios.get(url('/'));
export const fetchStory = (title) => axios.get(url(`/${title}`));
export const postStory = (newStory) => axios.post(url('/'), newStory);
export const updateStory = (title, story) => axios.patch(url(`/${title}`, story));
export const deleteStory = (id) => axios.delete(url(`/${id}`));