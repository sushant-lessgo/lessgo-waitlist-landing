import type { Metadata } from "next";
import Script from 'next/script'
import { GeistSans, GeistMono } from 'geist/font';
import "./globals.css";

export const metadata: Metadata = {
  title: "Lessgo.ai – Build Landing Pages That Convert",
  description: "AI-powered landing page builder for founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      {/* Hotjar */}
      <Script
  id="hotjar-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function (c, s, q, u, a, r, e) {
        c.hj = c.hj || function () { (c.hj.q = c.hj.q || []).push(arguments) };
        c._hjSettings = { hjid: 6371891 };
        r = s.getElementsByTagName('head')[0];
        e = s.createElement('script');
        e.async = true;
        e.src = q + c._hjSettings.hjid + u;
        r.appendChild(e);
      })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 6371891);
    `,
  }}
/>
        
{/* Google Analytics */}
<Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DM2YZB9VYG"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DM2YZB9VYG');
            `,
          }}
        />

      </head>
      <body className={`${GeistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
