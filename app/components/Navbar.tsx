"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { label: "Home", id: "home" },
    { label: "Layanan", id: "layanan" },
    { label: "Area", id: "area" },
    { label: "Kontak", id: "cta" },
    { label: "Testimoni", id: "testimoni" },
];

export default function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    // 🔥 hide navbar on scroll down
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 80) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    // 🔥 detect active section
    useEffect(() => {
        const handleScroll = () => {
            menuItems.forEach((item) => {
                const el = document.getElementById(item.id);
                if (!el) return;

                const rect = el.getBoundingClientRect();

                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActive(item.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔥 lock scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // 🔥 smooth scroll with offset
    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        const navbar = 80; // tinggi navbar kamu
        const extraOffset = 20; // kasih breathing room biar gak nempel atas

        const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            navbar -
            extraOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });

        setOpen(false);
    };

    return (
        <>
            {/* NAVBAR */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
                    show ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div
                        className="
                        mt-4 flex justify-between items-center px-4 md:px-8 py-2 rounded-full 
                        bg-white/70 backdrop-blur-xl 
                        shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                        border border-white/40
                    "
                    >
                        {/* LOGO */}
                        <img
                            src="/img/logo1.png"
                            alt="logo"
                            className="h-9 md:h-11 lg:h-12 cursor-pointer opacity-90 hover:opacity-100 transition"
                            onClick={() => handleScrollTo("home")}
                        />

                        {/* DESKTOP MENU */}
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleScrollTo(item.id)}
                                    className={`
                                        transition-colors duration-200 cursor-pointer
                                        ${
                                            active === item.id
                                                ? "text-black"
                                                : "text-gray-500 hover:text-black"
                                        }
                                    `}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setOpen(true)}
                            className="md:hidden flex flex-col gap-1"
                        >
                            <span className="w-6 h-[2px] bg-black"></span>
                            <span className="w-6 h-[2px] bg-black"></span>
                            <span className="w-6 h-[2px] bg-black"></span>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col"
                    >
                        {/* HEADER */}
                        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
                            <img src="/img/logo1.png" className="h-8" />

                            <button
                                onClick={() => setOpen(false)}
                                className="text-2xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* MENU */}
                        <div className="flex flex-col gap-6 px-6 mt-10">
                            {menuItems.map((item, i) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => handleScrollTo(item.id)}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="text-2xl font-semibold text-gray-800 text-left"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-auto p-6">
                            <button
                                onClick={() => handleScrollTo("cta")}
                                className="w-full py-3 rounded-full bg-black text-white text-sm font-medium"
                            >
                                Konsultasi Sekarang
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
