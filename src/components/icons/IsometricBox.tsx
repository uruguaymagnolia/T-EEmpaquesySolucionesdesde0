import React from 'react';

export function IsometricBox(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M10 30 L50 50 L90 30"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M50 50 L50 90"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
