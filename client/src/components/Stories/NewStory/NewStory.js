import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStory } from '../../../actions/stories';

const NewStory = (props) => {
	const [storyValue, setStoryValue] = useState({title: "Choose a title for your story", text: "Enter text"});
	const dispatch = useDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		// console.log(storyValue.text)
		// const newText = storyValue.text.split('\n').map(e => { return { paragraph: e}});
		// setStoryValue({...storyValue, text: newText});
		alert(JSON.stringify(storyValue));
		dispatch(createStory(storyValue));
		props.history.push(`/stories/${storyValue.title}`)
	}
	
	return (
		<div>
			<h1>Create story</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Story title</label>
				<input name="title" type="text" onChange={(e) => setStoryValue({...storyValue, title: e.target.value })}/>
				<label htmlFor="text">Story text</label>
				<textarea name="text" rows="10" cols="50" onChange={(e) => setStoryValue({...storyValue, text: e.target.value.split('\n').map(e => {return {paragraph: e}})})}>
				</textarea>
				<input type="submit"/>
			</form>
			<p>Hey</p>
		</div>
	)
}

export default NewStory;