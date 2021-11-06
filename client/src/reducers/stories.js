const stories = (stories = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL' :
			return action.payload;
		case 'FETCH_ONE' :
			console.log(action.payload);
			return action.payload;
		case "CREATE" :
			return [...stories, action.payload];
		default:
			return stories;
	}
}

export default stories;