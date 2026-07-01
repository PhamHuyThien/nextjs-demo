import './globals.css'; // Tailwind CSS
import {AppProvider} from '@/app/(clients)/contexts/app-context';

export const metadata = {
    title: 'My Awesome App',
    description: 'Next.js App với Toast và Context',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <AppProvider>
            <div className="min-h-screen bg-base-100">
                {children}
            </div>
        </AppProvider>
        </body>
        </html>
    );
}