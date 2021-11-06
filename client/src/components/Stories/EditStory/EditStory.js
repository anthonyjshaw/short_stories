import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { updateStory } from '../../../actions/stories';

const EditStory = (props) => {
	let { title } = useParams();
	console.log(title);
	const dispatch = useDispatch();
	const [storyValue, setStoryValue] = useState({title: '', text: ''});
	const story = useSelector((state) => state.stories.find(e => e.title === title));
	useEffect(() => {
		try {
			if (story) {
				setStoryValue(story);
			} else {
				console.log("No story");
			}
		} catch (error) {
			console.error(error);
		}
	}, [story]);



	function handleSubmit(e) {
		e.preventDefault();
		alert(JSON.stringify(storyValue));
		dispatch(updateStory(storyValue));
		props.history.push(`/stories/${storyValue.title}`)
		
	}
	return (
		<div>
			<p><Link to="/stories">Back to stories</Link></p>
			<h1>Edit Story</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="input-field">
					<label htmlFor="title">Story title</label>
					<input name="title" type="text" onChange={(e) => setStoryValue({...storyValue, title: e.target.value })}/>
				</div>
				<div className="input-field">
					<label htmlFor="text">Story text</label>
					<textarea name="text" rows="10" cols="50" onChange={(e) => setStoryValue({...storyValue, text: e.target.value.split('\n').map(e => {return {paragraph: e}})})}>
					</textarea>
				</div>
				<input type="submit" className="story-form-submit"/>
			</form>
		</div>
	);
}

export default EditStory;
