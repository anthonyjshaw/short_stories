import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStories, destroyStory } from '../../actions/stories';

const Stories = () => {
	const dispatch = useDispatch();
	
    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

	const stories = useSelector((state) => state.stories);
	console.log(stories);
	if(Array.isArray(stories)) {
		return(
			<div className='container'>
				<h1>Short Stories</h1>
				<div>
					<p><Link to="/stories/new_story">Create story</Link></p>
				</div>
				<hr/>
				<div>
					{stories.map(e => 
					<div key={e._id}>
						<p><Link to={`/stories/${e.title}`}>{e.title}</Link> <span><Link to={`/stories/${e.title}/edit`}>Edit story</Link></span> <span onClick={() => dispatch(destroyStory(e._id))}>Delete story</span></p>
					</div>)
					}
				</div>
			</div>
		);
	} else {
		
		return <div>Loading...</div>
	}
}
export default Stories;