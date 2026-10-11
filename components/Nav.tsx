'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
const links = [{href:'/',label:'Home'},{href:'/projects',label:'Projects'},{href:'/opensource',label:'Open Source'},{href:'/about',label:'About'},{href:'/blog',label:'Journal'}];
export default function Nav(){ const path=usePathname(); const [open,setOpen]=useState(false); return <header className="nav-wrap"><nav className="nav container"><Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">r.</span><span>rahil<span className="brand-muted">.dev</span></span></Link><div className={`nav-links ${open?'nav-open':''}`}>{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className={(path===l.href || (l.href!=='/'&&path.startsWith(l.href)))?'active':''}>{l.label}</Link>)}</div><a className="nav-cta" href="https://www.linkedin.com/in/md-rahil-a070b3329/" target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={15}/></a><button className="mobile-menu" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav></header> }
