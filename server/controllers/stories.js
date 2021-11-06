import Story from "../models/Story.js";
import Comment from "../models/Comment.js";
// import { sendTweet } from "../tweet.js";
// What routes do we need?
// 1. Get all stories ✅
// 2. Get one story ✅
// 3. Create story ✅
// 4. Update story
// 5. Delete story



export const getStories = async (_, response) => {
    try {
        const stories = await Story.find();
        response.status(200).json(stories);
    } catch (error) {
        console.error(error);
    }
}

export const getStory = async (req, res) => {
    try {
        const story = await Story.findOne({title: req.params.title});
        console.log(story);
        res.status(200).json(story);
    } catch (error) {
        console.error(error);
    }
}

export const createStory = async (req, res) =>  {
    try {
        const story = await new Story(req.body);
        await story.save();
        console.log(story)
        res.status(201).json(story);
    } catch (error) {
        console.error(error)
    }
}

export const updateStory = async (req, res) => {
    try {
        console.log('updating...')
        const story = await Story.findOne({title: req.params.title});
        await story.updateOne(req.body);
        await story.save();
        res.status(200).json(story);
        console.log('updated.')
        console.log(story);
    } catch (error) {
        console.error(error);
    }
}

export const destroyStory = async (req, res) => {
    try {
        console.log('trying to delete...')
        await Story.findByIdAndDelete(req.params.id);
        console.log("deleted.")
        res.json({message: "deleted..."})
    } catch (error) {
        console.error(error);
    }
}

export const deleteAllStories = async (_, res) => {
    try {
        const stories = await Story.find();
        await Story.deleteMany(stories);
        res.status(200).json(stories);
    } catch (error){
        console.log(error);
    }
}
