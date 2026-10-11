import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
export const metadata: Metadata = { title: 'MD Rahil — AI Engineer, Software Builder & Open Source Contributor', description: "MD Rahil's portfolio: AI and software projects, open-source contributions, engineering notes, and developer tools." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Nav/><main>{children}</main><Footer/></body></html> }
