"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function PrivacyTermsModal() {
    const [open, setOpen] = useState<"privacy" | "terms" | null>(null);

    return (
        <>
            {/* TRIGGER */}
            <div className="flex gap-6 text-xs text-gray-400">
                <button
                    onClick={() => setOpen("privacy")}
                    className="hover:text-gray-700 transition cursor-pointer"
                >
                    Privacy Policy
                </button>

                <button
                    onClick={() => setOpen("terms")}
                    className="hover:text-gray-700 transition cursor-pointer"
                >
                    Terms & Conditions
                </button>
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* BACKDROP */}
                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setOpen(null)}
                        />

                        {/* MODAL BOX */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ duration: 0.25 }}
                            className="
                                relative z-10
                                w-[92%] max-w-[600px]
                                max-h-[80vh]
                                overflow-hidden
                                rounded-[24px]
                                bg-white/80
                                backdrop-blur-2xl
                                border border-white/40
                                shadow-[0_30px_100px_rgba(0,0,0,0.25)]
                            "
                        >
                            {/* HEADER */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    {open === "privacy"
                                        ? "Privacy Policy"
                                        : "Terms & Conditions"}
                                </h2>

                                <button
                                    onClick={() => setOpen(null)}
                                    className="p-2 rounded-full hover:bg-black/5 transition cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 text-sm text-gray-600 leading-relaxed overflow-y-auto max-h-[60vh] space-y-4">
                                {open === "privacy" ? (
                                    <>
                                        <p>
                                            SolusiSehat berkomitmen menjaga
                                            kerahasiaan data pasien dan
                                            pengguna. Semua informasi yang
                                            dikirim melalui website atau
                                            WhatsApp hanya digunakan untuk
                                            keperluan pelayanan kesehatan,
                                            konsultasi, dan penjadwalan layanan
                                            home care.
                                        </p>

                                        <p>
                                            Kami tidak menjual, menyebarkan,
                                            atau membagikan data pribadi kepada
                                            pihak ketiga tanpa persetujuan
                                            pengguna.
                                        </p>

                                        <p>
                                            Data hanya disimpan selama
                                            diperlukan untuk memberikan layanan
                                            terbaik.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p>
                                            Dengan menggunakan layanan
                                            SolusiSehat, pengguna menyetujui
                                            bahwa layanan bersifat konsultasi
                                            dan perawatan home care sesuai
                                            kebutuhan medis yang tersedia.
                                        </p>

                                        <p>
                                            Jadwal kunjungan, biaya layanan, dan
                                            ketersediaan tenaga medis dapat
                                            berubah sesuai kondisi operasional.
                                        </p>

                                        <p>
                                            SolusiSehat berhak menolak layanan
                                            jika ditemukan kondisi di luar
                                            cakupan atau risiko medis tertentu.
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* FOOTER */}
                            <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
                                <button
                                    onClick={() => setOpen(null)}
                                    className="
                                        px-5 py-2
                                        rounded-full
                                        bg-black
                                        text-white
                                        text-sm
                                        hover:scale-105
                                        transition
                                        cursor-pointer
                                    "
                                >
                                    Mengerti
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
