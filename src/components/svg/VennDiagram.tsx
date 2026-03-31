import React from 'react';

interface VennDiagramProps {
  className?: string;
  isDark?: boolean;
}

export const VennDiagram: React.FC<VennDiagramProps> = ({
  className = '',
  isDark = false,
}) => {
  const strokeColor = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(26,26,24,0.25)';
  const textColor = isDark ? 'rgba(255,255,255,0.5)' : '#9E9E9E';
  const centerColor = isDark ? '#FFFFFF' : '#1A1A18';

  return (
    <svg
      viewBox="0 0 400 280"
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Left circle - Intention */}
      <circle
        cx="145"
        cy="100"
        r="95"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
      />
      
      {/* Right circle - Creation */}
      <circle
        cx="255"
        cy="100"
        r="95"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
      />
      
      {/* Vertical line through the middle of intersection */}
      <line
        x1="200"
        y1="15"
        x2="200"
        y2="185"
        stroke={strokeColor}
        strokeWidth="1"
      />
      
      {/* Labels - with more spacing from circles */}
      <text
        x="75"
        y="250"
        textAnchor="middle"
        fill={textColor}
        fontFamily="Inter, sans-serif"
        fontSize="13"
        fontWeight="400"
        letterSpacing="0.08em"
      >
        Intention
      </text>
      
      <text
        x="200"
        y="250"
        textAnchor="middle"
        fill={centerColor}
        fontFamily="Inter, sans-serif"
        fontSize="15"
        fontWeight="400"
        letterSpacing="0.16em"
      >
        align
      </text>
      
      <text
        x="325"
        y="250"
        textAnchor="middle"
        fill={textColor}
        fontFamily="Inter, sans-serif"
        fontSize="13"
        fontWeight="400"
        letterSpacing="0.08em"
      >
        Creation
      </text>
    </svg>
  );
};

export default VennDiagram;
