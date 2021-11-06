import mongoose from "mongoose";

const commentSchema = mongoose.Schema({

	story_id : {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Story',
		required: true,
	},

	commentBody: {
		type: String,
		required: true,
	},

	createdAt: {
		type: Date,
		default: new Date()

	},

});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;