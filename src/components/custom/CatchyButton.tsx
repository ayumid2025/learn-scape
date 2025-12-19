import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const catchyButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-bold ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-1 hover:shadow-lg active:scale-95 active:shadow-md',
  {
    variants: {
      variant: {
        default:
          'bg-yellow-400 text-yellow-900 border-b-4 border-yellow-600 hover:bg-yellow-300',
        primary:
          'bg-brand-primary text-white border-b-4 border-brand-primary-dark hover:bg-brand-primary/90',
        secondary:
          'bg-pink-500 text-white border-b-4 border-pink-700 hover:bg-pink-500/90',
        success:
          'bg-green-500 text-white border-b-4 border-green-700 hover:bg-green-500/90',
      },
      size: {
        default: 'h-12 px-8 py-3',
        sm: 'h-10 rounded-full px-4',
        lg: 'h-14 rounded-full px-10 text-xl',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface CatchyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof catchyButtonVariants> {
  asChild?: boolean;
}

const CatchyButton = React.forwardRef<HTMLButtonElement, CatchyButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(catchyButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CatchyButton.displayName = 'CatchyButton';

export { CatchyButton, catchyButtonVariants };
