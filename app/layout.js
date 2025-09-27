import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorWrapper } from "./error-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "havingnext", // this is default fallback title of all nested routes or remaining route
    template: "%s | Next 15", // add a suffix or prefix to the existing title
    // absolute:"" // usefull for absolute title which override all previous title
  },
  description: "Having Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div>Header of the website</div>
        </header>
        <ErrorWrapper>
          {children}
        </ErrorWrapper>
        <footer>
          <div>Footer of the website</div>
        </footer>
      </body>
    </html>
  );
}
