"use client"
import type { SVGProps } from 'react';

export const AbaadLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50 10 L90 50 L50 90 L10 50 Z"
      stroke="hsl(var(--primary))"
      strokeWidth="5"
      fill="hsl(var(--primary) / 0.1)"
    />
    <path
      d="M30 50 L50 30 L70 50 L50 70 Z"
      stroke="hsl(var(--accent))"
      strokeWidth="5"
      fill="hsl(var(--accent) / 0.2)"
    />
    <text
      x="50"
      y="55"
      fontFamily="Cairo, sans-serif"
      fontSize="20"
      fill="currentColor"
      textAnchor="middle"
      fontWeight="bold"
    >
      أ
    </text>
  </svg>
);