import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css';
import { Inter } from 'next/font/google';
import theme from '@/lib/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from '@/components/header';
import LocalizationProvider from '@/providers/localization';

export const metadata = {
  metadataBase: new URL('https://killtonydb.com/'),
  title: 'Kill Tony DB',
  description: 'A database of Kill Tony episodes, guests, and more.',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <LocalizationProvider>
              <CssBaseline />
              <Header />
              {children}
            </LocalizationProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
