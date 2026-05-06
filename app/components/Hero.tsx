"use client";
import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[100svh] pt-6 overflow-hidden text-white"
        >
            {/* 🔵 Background */}
            <div
                className="
                    absolute inset-0
                    bg-no-repeat
                    bg-cover
                    bg-[89%_center]
                    md:bg-top
                "
                style={{
                    backgroundImage: "url('/img/bg-hero.webp')",
                }}
            />

            {/* 🔵 Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0c66af]/95 via-[#1287e7]/85 to-[#60a5fa]/0" />

            {/* 🔵 Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* 🔵 Content */}
            <div className="relative z-10 flex items-center min-h-[100svh] py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-full md:max-w-[560px]"
                        >
                            {/* BADGE */}
                            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white/90">
                                #PelayananTerbaik
                            </div>

                            {/* HEADING */}
                            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-semibold tracking-tight">
                                Solusi Home Care
                                <br />
                                Terpercaya untuk
                                <br />
                                Kesehatan Keluarga
                                <br />
                                di Rumah
                            </h1>

                            {/* DESCRIPTION */}
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/90 max-w-md">
                                Didukung tim profesional: dokter, perawat,
                                bidan, caregiver, dan fisioterapis untuk
                                pelayanan kesehatan langsung di rumah Anda.
                            </p>

                            {/* CTA */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                {/* WA CTA */}
                                <a
                                    href={`https://wa.me/6285111313157?text=${encodeURIComponent(
                                        "Halo Solusi Sehat, \n\nBoleh saya konsultasi lebih lanjut mengenai layanan yang cocok untuk kebutuhan keluarga saya?\n\nTerima kasih",
                                    )}`}
                                    target="_blank"
                                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#0c66af] font-medium shadow-lg hover:scale-105 transition text-center"
                                >
                                    Konsultasi Sekarang
                                </a>

                                {/* SCROLL TO LAYANAN */}
                                <button
                                    onClick={() => {
                                        const el =
                                            document.getElementById("layanan");
                                        if (!el) return;

                                        const offset = 80;
                                        const top =
                                            el.getBoundingClientRect().top +
                                            window.scrollY -
                                            offset;

                                        window.scrollTo({
                                            top,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/30 text-white/90 backdrop-blur-sm hover:bg-white/10 transition cursor-pointer"
                                >
                                    Pelajari Layanan
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
