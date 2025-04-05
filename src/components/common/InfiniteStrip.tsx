import React from 'react';
import styles from './styles/InfiniteStrip.module.css'

export enum AnimationType {
    DEFAULT = "animationStrip",
    REVERSE = "animationStripReverse",
}

interface InfiniteStripProps {
  children: React.ReactNode;
  animation?: AnimationType;
  velocity?: number;
  className?: string;
}

export const InfiniteStrip = ({ children, animation = AnimationType.DEFAULT, velocity = 60, className}: InfiniteStripProps) => {
  return (
    <div className="flex size-full flex-shrink-0 items-center gap-4 text-txt-primary overflow-hidden relative">
      {[...Array(3)].map((_, idx) => (
        <section
          key={idx}
          className={`${styles[animation]} ${className}`}
          style={{"--velocity": `${velocity}s` } as React.CSSProperties}
        >
          {children}
        </section>
      ))}
    </div>
  );
};
