import './globals.css'; // Tailwind CSS
import AppInitializer from "@/app/(clients)/_components/app-initializer";
import {AppProvider} from "@/app/(clients)/_providers/app-provider";

export const metadata = {
    title: 'My Awesome App',
    description: 'Next.js App với Toast và Context',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <AppProvider>
            <AppInitializer/>
            <div className="min-h-screen bg-base-100">
                {children}
            </div>
        </AppProvider>
        </body>
        </html>
    );
}