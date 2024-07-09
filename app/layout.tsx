import { sora } from './ui/fonts';
import './ui/global.css';

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
