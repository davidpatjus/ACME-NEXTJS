import { Metadata } from 'next';
import { sora } from './ui/fonts';
import './ui/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>{children}
      <footer className='py-10 flex justify-center items-center'> puro rapstar nigga </footer>
      </body>
    </html>
  );
}
