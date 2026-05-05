"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function ServiceArea() {
    return (
        <section className="relative py-[60px] overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1D8CE8] to-[#29BF3B]" />

            {/* overlay */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[160px] bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[160px] bg-gradient-to-l from-black/40 via-black/20 to-transparent z-10" />

            {/* top bottom */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-black/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-black/20 to-transparent" />

            <div className="relative z-10 scroll-mt-[100px]">
                {/* TITLE */}
                <div id="area" className="text-center mb-[56px] px-6">
                    <h2 className="text-[28px] md:text-[32px] font-semibold text-white tracking-tight">
                        Area Layanan Kami
                    </h2>
                    <p className="mt-[12px] text-white/80 text-[14px] max-w-[480px] mx-auto">
                        Kami melayani berbagai wilayah untuk memastikan Anda
                        mendapatkan layanan kesehatan terbaik langsung di rumah
                    </p>
                </div>

                {/* MAP WRAPPER */}
                <div className="max-w-5xl mx-auto px-6">
                    <div
                        className="
                            relative
                            rounded-[28px]
                            overflow-hidden
                            border border-white/20
                            bg-white/10
                            backdrop-blur-xl
                            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                        "
                    >
                        {/* subtle top highlight */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-[80px] bg-gradient-to-b from-white/20 to-transparent" />

                        {/* MAP */}
                        <div className="relative z-10">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
