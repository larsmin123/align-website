import React from 'react';

interface ConcentricCirclesProps {
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  count?: number;
  isDark?: boolean;
}

export const ConcentricCircles: React.FC<ConcentricCirclesProps> = ({
  className = '',
  strokeColor,
  strokeWidth = 1,
  count = 6,
  isDark = false,
}) => {
  const defaultStroke = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(17,17,17,0.14)';
  const color = strokeColor || defaultStroke;
  
  const circles = Array.from({ length: count }, (_, i) => {
    const radius = 50 - (i * (45 / count));
    return (
      <circle
        key={i}
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {circles}
    </svg>
  );
};

export default ConcentricCircles;
