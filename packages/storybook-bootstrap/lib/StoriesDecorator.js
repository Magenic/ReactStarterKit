import React from 'react';
import StorybookProvider from '../../../src/providers/StorybookProvider';

const StoriesDecorator = (storyFn) => (
    <StorybookProvider>
        {storyFn()}
    </StorybookProvider>
);

export default StoriesDecorator;
