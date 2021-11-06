import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    text: {
        required: true,
        type: [
        { paragraph: String },
            ]
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Comment"
    }],
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Story = mongoose.model('Story', storySchema);
export default Story;