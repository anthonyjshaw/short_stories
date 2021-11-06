import * as api from '../api';

export const getStories = () => async dispatch => {
	try {
		const { data } = await api.fetchStories();
		dispatch({type: 'FETCH_ALL', payload: data});
	} catch (error) {
		console.error(error);
	}
};

export const getStory = (title) => async dispatch => {
	try {
		const { data } = await api.fetchStory(title);
		console.log(data);
		dispatch({ type: 'FETCH_ONE', payload: data });
 	} catch (error) {
		console.error(error);
	}
};

export const createStory = (story) => async dispatch => {
	try {
		const { data } = await api.postStory(story);
		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.error(error);
	}
};

export const updateStory = (title, story) => async dispatch => {
	try {
		const { data } = await api.updateStory(title, story);
		console.log(data);
		dispatch({ type: "UPDATE", payload: data })
	} catch (error) {
		console.error(error);
	}
};

export const destroyStory = (id) => async dispatch => {
	try {
		await api.deleteStory(id);
		dispatch({type: "DESTROY", payload: id});
	} catch (error) {
		console.error(error);
	}
}