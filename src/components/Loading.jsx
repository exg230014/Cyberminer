import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <ThreeCircles
        height={80}
        width={80}
        color="#00BFFF"
        visible={true}
        ariaLabel="three-circles-loading"
      />
    </div>
  );
};

export default Loading;
