"use client";
import Link from "next/link";

const SectionNavbar = () => {
    const links = [
        {name: "Главная", href: "#hero"},
        {name: "О Проекте", href: "#about"},
        {name: "Механизм работы", href: "#worksteps"},
        {name: "Технологий", href: "#technologies"},
        {name: "Команда", href: "#team"},
        {name: "Контакты", href: "#contacts"},
    ];
    
    return(
        <header className = "fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
            <nav className = "container mx-auto flex items-center justify-between p-4">
                <Link href="#" className = "text-xl font-bold text-slate-900">
                    Talapker
                </Link>
                <ul className ="flex gap-6 text-slate-700">
                    {links.map(link =>(
                        <li key ={link.href}> 
                            <a href={link.href} className = "hover:text-slate-900 transition">
                                {link.name}
                            </a>
                        </li>
                    ))}      
                </ul>
            </nav>
        </header>
    );
};

export default SectionNavbar;