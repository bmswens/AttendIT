import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import Nav from './Nav'

export const metadata = {
    title: "AttendIT",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <Nav>
                        {children}
                    </Nav>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
