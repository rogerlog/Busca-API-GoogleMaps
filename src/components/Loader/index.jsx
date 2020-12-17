import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  }
};

export default () => {
  return <Lottie options={defaultOptions} />;
}