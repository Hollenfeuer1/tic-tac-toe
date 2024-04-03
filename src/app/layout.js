import "./globals.css";
import { Sacramento } from 'next/font/google';

const sacramento = Sacramento({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

export const metadata = {
  title: "Tic Tac Toe",
  description: "Play Tic Tac Toe | Alyssa Codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sacramento.className}>{children}</body>
    </html>
  );
}
