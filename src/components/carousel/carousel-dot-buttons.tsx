import React, { ComponentPropsWithRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/tailwind-merge';

interface CarouselDotButtons extends ComponentPropsWithRef<'button'> {}

export default function DotButton({
  children,
  className,
  ...props
}: CarouselDotButtons) {
  return (
    <button
      className={cn(
        'm-0 flex size-4 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-[50%] border-0 p-0 shadow-inset-active-dot-disabled tap-highlight-custom',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
