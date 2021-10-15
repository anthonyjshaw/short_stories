import Story from "../models/Story.js";

// What routes do we need?
// 1. Get all stories
// 2. Get one story
// 3. Create story
// 4. Update story
// 5. Delete story



export const getStories = async (request, response) => {
    try {
        const stories = await Story.find();
        response.status(200).json(stories);
    } catch (error) {
        console.error(error);
    }
}