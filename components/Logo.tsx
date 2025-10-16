import React from 'react';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    isSimple?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isSimple = false, ...props }) => {
  return (
    <div className="flex flex-col items-center" {...props}>
      <svg
        viewBox="0 0 80 40"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full text-white"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="35"
          fontWeight="bold"
          fill="currentColor"
          fontFamily="sans-serif"
          letterSpacing="-0.05em"
        >
          TAI
        </text>
      </svg>
      {!isSimple && (
        <p className="text-gray-500 tracking-[0.2em] text-xs mt-1 uppercase">Photo Editor</p>
      )}
    </div>
  );
};