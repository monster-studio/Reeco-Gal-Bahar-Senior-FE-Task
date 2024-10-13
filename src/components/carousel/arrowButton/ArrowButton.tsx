import React from 'react';
import clsx from 'clsx';

import ChevronRightIcon from '../../../svgs/icons/ChevronRightIcon';
import ChevronLeftIcon from '../../../svgs/icons/ChevronLeftIcon';
import AngleUpIcon from '../../../svgs/icons/AngleUpIcon';
import AngleDownIcon from '../../../svgs/icons/AngleDownIcon';

type ArrowButtonProps = {
  onClick: () => void;
  disabled: boolean;
  direction: 'left' | 'right' | 'up' | 'down';
};

const ArrowButton: React.FC<ArrowButtonProps> = React.memo(({ onClick, disabled, direction }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'z-10 flex justify-center items-center h-10 w-10 min-h-10 min-w-10 rounded-full transition',
        {
          'bg-emerald-500 text-white': !disabled,
          'bg-emerald-800 text-emerald-300 cursor-not-allowed': disabled,
        }
      )}
      aria-label={direction === 'left' ? 'Previous' : direction === 'right' ? 'Next' : direction === 'up' ? 'Up' : 'Down'}
      disabled={disabled}
    >
      {direction === 'left' ? (
        <ChevronLeftIcon className={clsx(
          'h-4 w-4',
          {
            'fill-white': !disabled,
            'fill-emerald-300': disabled,
          }
        )} />
      ) : direction === 'right' ? (
        <ChevronRightIcon className={clsx(
          'h-4 w-4',
          {
            'fill-white': !disabled,
            'fill-emerald-300': disabled,
          }
        )} />
      ) : direction === 'up' ? (
        <AngleUpIcon className={clsx(
          'h-4 w-4',
          {
            'fill-white': !disabled,
            'fill-emerald-300': disabled,
          }
        )} />
      ) : direction === 'down' ? (
        <AngleDownIcon className={clsx(
          'h-4 w-4',
          {
            'fill-white': !disabled,
            'fill-emerald-300': disabled,
          }
        )} />
      ) : null}
    </button>
  );
});

export default ArrowButton;
