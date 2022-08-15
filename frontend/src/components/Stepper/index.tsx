/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

const Stepper: React.FC<{ children: any, step: number, next: Function, prev: Function; submit: any }> = ({
  children, step, next, prev, submit,
}) => {
  return (
    <div>
      {children}
      <div className={`grid grid-cols-${step !== 0 ? '2' : '1'} gap-x-2`}>
        {/* Move forward */}
        {
            step !== 0
              && (
                <button
                  type="button"
                  className="w-full px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => prev(--step)}
                >
                  Prev
                </button>
              )
            }
        {
            step !== 2
              ? (
                <button
                  type="button"
                  className="w-full px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => next(++step)}
                >
                  Next
                </button>
              )
              : (
                <button
                  type="button"
                  className="w-full px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={submit}
                >
                  Submit
                </button>
              )

        }
      </div>
    </div>
  );
};

export default Stepper;
