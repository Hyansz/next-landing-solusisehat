import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "SolusiSehat Home Care",
    description: "Layanan homecare profesional di rumah Anda",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id" className={`${poppins.className} h-full antialiased`}>
            <body className="min-h-full flex flex-col font-sans bg-white text-gray-800">
                {children}
                <SpeedInsights/>
                <Analytics/>
            </body>
        </html>
    );
}
