// Routes
// What routes do we need?
// 1. Get comments
// 2. Create comment
// 3. Update a comment
// 4. Delete a comment
import Comment from '../models/Comment.js';
import Story from '../models/Story.js';

export const getComments = async (req, res) => {
	try {
		console.log(req.params);
		const story = await Story.find({title: req.query.title});
		const comments = await Comment.find({story_id: story.id});
		res.status(200).json(comments);
		console.log(req.query.title);
	} catch (error) {
		console.error(error.message);
	}
};

export const createComment = async (req, res) => {
	try {
		const story = await Story.find({title: req.params.title});
		console.log(story);
		const comment = await new Comment(req.body);
		await comment.save();
		res.status(200).json(comment);
	} catch (error) {
		console.error(error.message);
	}
}