import React from 'react';

import Skeleton from '.';

export default {
  title: 'Core/Skeleton',
  component: Skeleton,
};

export const Default = () => (
  <div style={{display: 'flex'}}>
    <div style={{width: '50px', marginRight: '16px'}}>
      <Skeleton circle width="50px" height="50px" />
    </div>
    <div style={{flex: '1 1 auto'}}>
      <Skeleton count={5} />
    </div>
  </div>
);
