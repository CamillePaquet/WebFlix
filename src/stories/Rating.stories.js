import React from 'react';

import Rating from '../components/Rating.js';

export default {
  title: 'Rating',
  component: Rating,
 
};

const Template = (args) => <Rating note={ 4}/> ;

export const note = Template.bind({});

