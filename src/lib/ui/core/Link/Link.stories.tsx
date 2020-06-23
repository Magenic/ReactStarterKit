import React from 'react';

import {Internal} from './InternalLink/InternalLink.stories';
import {External} from './ExternalLink/ExternalLink.stories';

export default {
  title: 'Core/Link',
};

export const All = () => (
  <>
    <h3>Internal Link:</h3>
    <Internal />
    <br />
    <br />
    <hr />
    <h3>External Link:</h3>
    <External />
  </>
);
