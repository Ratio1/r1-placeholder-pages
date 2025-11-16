import clsx from 'clsx';
import { ReactNode } from 'react';

interface BorderedCardProps {
    children: ReactNode;
    className?: string;
}

export function BorderedCard({ children, className }: BorderedCardProps) {
    return (
        <div
            className={clsx(
                'col gap-4 rounded-xl border-2 border-slate-100 bg-white px-6 py-5',
                className,
            )}
        >
            {children}
        </div>
    );
}
