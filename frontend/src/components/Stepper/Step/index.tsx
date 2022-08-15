/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

const Step: React.FC<{ children: any, progress: boolean}> = ({ children, progress }) => {
  return (
    <div className={`${progress ? 'block' : 'hidden'} grid grid-cols-2 gap-x-4`}>
      {children}
    </div>
  );
};

export default Step;
