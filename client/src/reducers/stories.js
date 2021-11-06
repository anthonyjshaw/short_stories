const stories = (stories = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL' :
			return action.payload;
		case 'FETCH_ONE' :
			return action.payload;
		case "CREATE" :
			return [...stories, action.payload];
		case "UPDATE" :
			return stories.map(story => story.title === action.payload.title ? action.payload : story);
		case "DESTROY" : 
			return stories.filter((story) => story._id !== action.payload);
		default:
			return stories;
	}
}

export default stories;