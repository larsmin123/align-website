import React from 'react';

interface AnimatedCirclesProps {
  className?: string;
  isDark?: boolean;
}

export const AnimatedCircles: React.FC<AnimatedCirclesProps> = ({
  className = '',
  isDark = false,
}) => {
  const strokeColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(26,26,24,0.18)';
  const centerColor = isDark ? '#FFFFFF' : '#1A1A18';

  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Outermost circle - slow pulse */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.4"
      >
        <animate
          attributeName="r"
          values="90;92;90"
          dur="4s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.5;0.4"
          dur="4s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
      </circle>

      {/* Second circle */}
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.5"
      >
        <animate
          attributeName="r"
          values="70;71;70"
          dur="3.5s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
      </circle>

      {/* Third circle */}
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.6"
      >
        <animate
          attributeName="r"
          values="50;51;50"
          dur="3s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
      </circle>

      {/* Innermost circle */}
      <circle
        cx="100"
        cy="100"
        r="30"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.7"
      >
        <animate
          attributeName="r"
          values="30;31;30"
          dur="2.5s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
      </circle>

      {/* Center dot - breathing effect */}
      <circle
        cx="100"
        cy="100"
        r="4"
        fill={centerColor}
        opacity="0.9"
      >
        <animate
          attributeName="r"
          values="4;5;4"
          dur="2s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
        <animate
          attributeName="opacity"
          values="0.9;1;0.9"
          dur="2s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
      </circle>
    </svg>
  );
};

export default AnimatedCircles;
