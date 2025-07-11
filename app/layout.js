import { IBM_Plex_Mono, Inter, Prata } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400"],
});

const prataFont = Prata({
    variable: "--font-prata",
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export const metadata = {
    title: "Prabhmeet Singh (Portfolio)",
    description: "Created with NEXTjs and TW css",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${plexMono.variable} ${prataFont.variable} ${inter.variable} antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
