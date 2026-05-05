"use client";

import Container from "./Container";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section id="cta" className="py-[100px] md:py-[120px] bg-[#f9fafb]">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1], // iOS easing
                    }}
                    className="
                        bg-white
                        flex flex-col md:flex-row
                        items-center
                        gap-6 md:gap-10

                        rounded-[28px] md:rounded-[32px]
                        border border-gray-100
                        shadow-[0_20px_60px_rgba(0,0,0,0.06)]

                        overflow-hidden
                    "
                >
                    {/* 🧊 LEFT */}
                    <div className="flex-1 p-[28px] sm:p-[32px] md:p-[56px]">
                        <h3 className="text-[22px] pt-4 md:pt-0 sm:text-[24px] md:text-[30px] font-semibold text-gray-900 tracking-tight leading-snug">
                            Layanan Homecare Profesional
                        </h3>

                        <p className="text-gray-500 text-[14px] mt-3 max-w-[420px] leading-relaxed">
                            Tim medis kami siap membantu Anda langsung ke rumah
                            dengan layanan cepat, aman, dan terpercaya.
                        </p>

                        {/* CTA BUTTON */}
                        <motion.a
                            href={`https://wa.me/6285111313157?text=${encodeURIComponent(
                                "Halo Solusi Sehat, \n\nBoleh saya konsultasi lebih lanjut mengenai layanan yang cocok untuk kebutuhan keluarga saya?\n\nTerima kasih",
                            )}`}
                            target="_blank"
                            whileHover={{
                                y: -2,
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="
                                inline-block mt-6

                                px-[24px] py-[13px]
                                rounded-full

                                bg-gradient-to-r from-green-500 to-green-600
                                text-white text-[14px] font-medium

                                shadow-[0_8px_25px_rgba(34,197,94,0.30)]
                                hover:shadow-[0_12px_35px_rgba(34,197,94,0.40)]

                                transition
                            "
                        >
                            Hubungi via WhatsApp
                        </motion.a>
                    </div>

                    {/* 🖼 RIGHT */}
                    <div className="flex-1 relative h-[200px] sm:h-[240px] md:h-[320px] overflow-hidden">
                        <motion.img
                            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200"
                            alt="homecare"
                            className="w-full h-full object-cover"
                            whileHover={{
                                scale: 1.05,
                            }}
                            transition={{ duration: 0.6 }}
                        />

                        {/* overlay premium */}
                        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
