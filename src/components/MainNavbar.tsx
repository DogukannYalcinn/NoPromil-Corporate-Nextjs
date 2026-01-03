"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type NavItem = { label: string; href: string };

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const items: NavItem[] = useMemo(
        () => [
            { label: "Ürün", href: "#product" },
            { label: "Hakkımızda", href: "#about" },
            { label: "İletişim", href: "#contact" },
            { label: "Blog", href: "#blog" },
        ],
        []
    );

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color:var(--background)]/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* Logo / Brand placeholder (you will replace) */}
                <a href="#top" className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0">
                        <Image
                            src="/logo-1024.png"
                            alt="NoPromil logo"
                            fill
                            priority
                            sizes="48px"
                            className="object-contain"
                        />
                    </div>

                    <div className="leading-tight">
                        <div className="text-sm font-semibold tracking-wide">NoPromil</div>
                        <div className="text-xs text-white/60">Kişisel Alkol Analizörü</div>
                    </div>
                </a>


                {/* Desktop nav */}
                <nav className="hidden items-center gap-1 md:flex">
                    {items.map((it) => (
                        <a
                            key={it.href}
                            href={it.href}
                            className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                        >
                            {it.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href={`https://wa.me/905467757273?text=${encodeURIComponent(
                            "Merhaba, NoPromil hakkında bilgi almak istiyorum."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp üzerinden iletişime geç"
                        title="WhatsApp"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                    >
                        <span className="sr-only">WhatsApp</span>

                        {/* WhatsApp Icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fill="currentColor"
                                d="M12.04 2C6.58 2 2.14 6.43 2.14 11.9c0 1.93.56 3.81 1.62 5.43L2 22l4.78-1.68a9.79 9.79 0 0 0 5.26 1.52h.01c5.46 0 9.9-4.44 9.9-9.9C21.95 6.43 17.5 2 12.04 2Zm5.73 14.04c-.24.67-1.18 1.23-1.62 1.29-.4.06-.9.09-1.45-.09-.33-.11-.76-.25-1.3-.48-2.27-1-3.74-3.45-3.86-3.61-.11-.16-.92-1.22-.92-2.33s.59-1.65.8-1.88c.2-.23.44-.29.59-.29h.43c.14 0 .33-.05.52.4.2.48.67 1.65.73 1.77.06.12.1.27.02.43-.08.16-.12.27-.24.42-.12.14-.25.32-.36.43-.12.12-.24.25-.1.49.14.23.6.99 1.29 1.6.88.79 1.62 1.04 1.85 1.15.23.12.37.1.5-.06.14-.16.57-.67.72-.9.15-.23.3-.19.5-.12.2.08 1.29.61 1.51.72.22.12.37.17.42.27.05.1.05.6-.19 1.27Z"
                            />
                        </svg>
                    </a>
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 md:hidden"
                        aria-label="Open menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {/* Simple hamburger icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>

                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden">
                    <div className="mx-auto max-w-6xl px-4 pb-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                            {items.map((it) => (
                                <a
                                    key={it.href}
                                    href={it.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-xl px-3 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                                >
                                    {it.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
