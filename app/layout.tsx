import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Tesch | Web Developer",
  description:
    "Website Engineer developer with hands-on experience building modern web applications across WordPress, headless CMS, and eCommerce platforms.",
  keywords: [
    "web developer",
    "joshua tesch",
    "next.js",
    "react",
    "wordpress",
    "shopify",
    "web development",
  ],
  authors: [{ name: "Joshua Tesch" }],
  openGraph: {
    title: "Joshua Tesch | Web Developer",
    description:
      "Website Engineer developer specializing in modern web applications",
    url: "https://joshuatesch.dev",
    siteName: "Joshua Tesch Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Tesch | Web Developer",
    description:
      "Website Engineer developer specializing in modern web applications",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "dark:bg-gray-800 dark:text-white dark:border-gray-700",
            style: {
              background: "#ffffff",
              color: "#1f2937",
              border: "1px solid #e5e7eb",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
