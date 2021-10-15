import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    title: {

    },

    text: {
    required: true,
    type: [
        { paragraph: string }
        ]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    


});

const Story = mongoose.model('Story', storySchema);
export default Story;