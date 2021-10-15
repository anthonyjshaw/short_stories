import {describe, test, expect } from '@jest/globals';
import Story from '../models/Story';

describe('Story model', () => {
    test('should create a new story model', () => {
        const story = new Story({title: 'My great story.', text: [{paragraph: 'What a great story'}]})
        expect(story.title).toBe('My great story.');
        expect(story.text[0].paragraph).toEqual("What a great story");
    });
});