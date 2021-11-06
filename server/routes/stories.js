import express from 'express';
import { createStory, destroyStory, getStories, getStory, updateStory } from '../controllers/stories.js';

const router = express.Router();

router.get('/', getStories);
router.get('/:title', getStory);
router.post('/', createStory);
router.patch('/:title', updateStory);
router.delete('/:id', destroyStory)


export default router;