import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getStory } from '../../../actions/stories';
const Story = () => {
	const dispatch = useDispatch();
	let { title } = useParams();
	useEffect(() =>  {
		dispatch(getStory(title));
	}, [dispatch]);

	const story = useSelector((state) => state.stories);
	console.log(story)
	if (!story) {
		return <div>Error: Can't find story</div>;
	} else {
		if (story.text !== undefined) {
			return (
				<div>
					<Link to="/stories">Back to stories</Link>
					<h1>{story.title}</h1>
					{story.text.map(e => <p key={e._id}>{e.paragraph}</p>)}
				</div>
			);
		} else {
			return <div>Loading...</div>
		}
	}
}
export default Story;