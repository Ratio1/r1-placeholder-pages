import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Ratio1 Services',
    description: 'Ratio1 service placeholder pages',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
