import React from 'react';

export function PackageFold(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        d="M20 20 L80 20 L80 80 L50 80"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
       <path
        d="M50 80 L20 50 L20 20"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
       <path
        d="M50 80 L80 50"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
