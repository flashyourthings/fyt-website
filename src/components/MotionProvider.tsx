'use client';
import { MotionConfig } from 'framer-motion';

// Respect the visitor's reduced-motion setting for every animation on the site.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
