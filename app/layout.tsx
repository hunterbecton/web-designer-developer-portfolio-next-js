'use client';

import localFont from '@next/font/local';

import { classNames } from '../utils';

const Aspekta = localFont({ src: './AspektaVF.woff2' });

import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
      </head>
      <body className={classNames(Aspekta.className, 'bg-stone-100')}>
        {children}
      </body>
    </html>
  );
}
