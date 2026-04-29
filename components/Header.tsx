'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/lib/store/cartStore';

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    // Selectors
    const items = useCartStore(state => state.items);
    const openCart = useCartStore(state => state.openCart);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        setIsDark(root.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const nextIsDark = !isDark;

        root.classList.toggle('dark', nextIsDark);
        localStorage.setItem('theme-preference', nextIsDark ? 'dark' : 'light');
        setIsDark(nextIsDark);
    };

    const navLinks = [
        { label: 'SHOP', href: '/shop' },
        { label: 'KONFIGURATOR', href: '/konfigurator' },
        { label: 'REALIZACJE', href: '/realizacje' },
        { label: 'O PRACOWNI', href: '/about' },
        { label: 'KONTAKT', href: '/contact' },
    ];

    return (
        <motion.header
            className={`${isHome ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome
                ? isDark
                    ? 'bg-[#13110f]/88 shadow-none border-b border-[#2f2923] backdrop-blur-none'
                    : 'bg-primary-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
                : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container-premium">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/A27B1673-E5B2-476B-8860-76422E4D6D5F.PNG" 
                            alt="AuraLasu Logo" 
                            width={160} 
                            height={45} 
                            className={`object-contain hover:opacity-70 transition-all duration-300 ${isDark ? 'brightness-0 invert contrast-125' : (scrolled || !isHome ? 'brightness-0' : '')}`} 
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[15px] tracking-[0.15em] font-medium hover:opacity-70 transition-opacity"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center gap-6">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className="relative w-9 h-9 rounded-full border border-gray-medium flex items-center justify-center overflow-hidden"
                            aria-label={isDark ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
                            title={isDark ? 'Jasny motyw' : 'Ciemny motyw'}
                            initial={false}
                            animate={{
                                backgroundColor: isDark ? 'rgba(239, 232, 223, 0.1)' : 'rgba(255, 255, 255, 0)',
                                borderColor: isDark ? 'rgba(184, 173, 159, 0.45)' : 'rgba(229, 229, 229, 1)'
                            }}
                            transition={{ type: 'spring', stiffness: 280, damping: 24, mass: 0.6 }}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.94 }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={isDark ? 'sun' : 'moon'}
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0, rotate: -16, scale: 0.82, y: 2 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, rotate: 16, scale: 0.82, y: -2 }}
                                    transition={{ duration: 0.22, ease: 'easeOut' }}
                                >
                                    {isDark ? (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                            <circle cx="12" cy="12" r="4.2" />
                                            <path strokeLinecap="round" d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.9 5.1l-1.5 1.5M6.6 17.4l-1.5 1.5M18.9 18.9l-1.5-1.5M6.6 6.6L5.1 5.1" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z"
                                            />
                                        </svg>
                                    )}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>

                        {/* Cart */}
                        <button
                            onClick={openCart}
                            className="relative hover:opacity-70 transition-opacity"
                            aria-label="Koszyk"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary-black text-primary-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-primary-white border-t border-gray-medium"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="container-premium py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg tracking-widest hover:opacity-70 transition-opacity py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
