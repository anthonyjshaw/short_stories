import axios from 'axios';

const url = (endpoint) => `/api/v1/stories${endpoint}`;

export const fetchStories = () => axios.get(url('/'));
export const fetchStory = (title) => axios.get(url(`/${title}`));
export const postStory = (newStory) => axios.post(url('/'), newStory);
