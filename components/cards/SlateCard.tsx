import clsx from 'clsx';
import { ReactNode } from 'react';

interface SlateCardProps {
    children: ReactNode;
    title?: string;
    className?: string;
}

export function SlateCard({ children, title, className }: SlateCardProps) {
    return (
        <div className={clsx('col gap-4 rounded-xl bg-slate-75 px-6 py-5', className)}>
            {title && <h3 className="section-title">{title}</h3>}
            {children}
        </div>
    );
}
