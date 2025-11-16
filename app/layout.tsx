import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Ratio1 Services',
    description: 'Ratio1 service placeholder pages',
    icons: {
        icon: [
            {
                url: '/favicon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-touch-icon.png',
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
