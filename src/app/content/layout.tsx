import Header from "@/components/header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "devTools",
    description: "Generated by create next app",
};

export default function ContentLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />

                <Sidebar />
                {children}
            </body>
        </html>
    );
}
