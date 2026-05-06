"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "./Container";

const doctors = [
    {
        name: "dr. Wahid",
        role: "Dokter Umum",
        hospital: "RS PKU Muhammadiyah Surakarta",
        rating: "4.9",
        reviews: 128,
        image: "/img/dokte2.webp"
    },
    {
        name: "Ns. Siti Rahmawati",
        role: "Perawat",
        hospital: "RSUD Dr. Moewardi Surakarta",
        rating: "4.8",
        reviews: 214,
        image: "/img/perawat.webp"
    },
    {
        name: "Ahmad Fajar",
        role: "Fisioterapis",
        hospital: "RS Ortopedi Prof. Dr. R. Soeharso",
        rating: "4.7",
        reviews: 96,
        image: "/img/fisio.webp"
    },
    {
        name: "Maya Lestari",
        role: "Caregiver",
        hospital: "RS Kasih Ibu Surakarta",
        rating: "4.9",
        reviews: 180,
        image: "/img/caregiver.webp"
    },
    {
        name: "dr. Budi Santoso",
        role: "Dokter Umum",
        hospital: "RS Islam Surakarta",
        rating: "4.6",
        reviews: 75,
        image: "/img/dokte1.webp"
    },
    {
        name: "Ns. Rina Kartika",
        role: "Perawat",
        hospital: "RS JIH Solo",
        rating: "4.8",
        reviews: 142,
        image: "/img/perawat2.webp"
    }
];

export default function Team() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: dir === "left" ? -260 : 260,
            behavior: "smooth",
        });
    };

    // 🖱️ DRAG
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;

        isDown.current = true;
        scrollRef.current.classList.add("cursor-grabbing");

        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseUp = () => {
        isDown.current = false;
        scrollRef.current?.classList.remove("cursor-grabbing");
    };

    const handleMouseLeave = () => {
        isDown.current = false;
        scrollRef.current?.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollRef.current) return;

        e.preventDefault();

        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.2;

        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <section className="relative py-[80px] md:py-[104px] overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D8CE8] to-[#29BF3B]" />

            {/* overlay */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[80px] md:w-[160px] bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[80px] md:w-[160px] bg-gradient-to-l from-black/40 via-black/20 to-transparent z-10" />

            {/* top bottom */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[80px] md:h-[120px] bg-gradient-to-b from-black/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] md:h-[120px] bg-gradient-to-t from-black/20 to-transparent" />

            <div className="relative z-20">
                <Container>
                    {/* TITLE */}
                    <h2 className="text-center text-[22px] md:text-[28px] font-semibold text-white mb-[40px] md:mb-[64px] tracking-tight">
                        Tim Terpercaya SolusiSehat
                    </h2>

                    <div className="relative">
                        {/* CAROUSEL */}
                        <div
                            ref={scrollRef}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            className="
                                flex gap-[16px] md:gap-[22px]
                                overflow-x-auto md:overflow-x-hidden
                                scroll-smooth
                                pb-[20px] md:pb-[28px]
                                no-scrollbar
                                snap-x snap-mandatory
                                cursor-grab
                                select-none
                            "
                        >
                            {doctors.map((doc, i) => (
                                <div
                                    key={i}
                                    className="
                                        snap-start
                                        min-w-[78%] sm:min-w-[60%] md:min-w-[240px]
                                        bg-white
                                        rounded-[18px] md:rounded-[20px]
                                        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                                        md:hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                                        md:hover:-translate-y-1
                                        transition duration-300
                                        overflow-hidden
                                        active:scale-[0.98]
                                        mt-3 md:mt-5
                                        mb-4 md:mb-8
                                    "
                                >
                                    {/* IMAGE */}
                                    <div className="relative w-full h-[220px] md:h-[300px] overflow-hidden">
                                        <Image
                                            src={doc.image}
                                            alt={doc.name}
                                            fill
                                            sizes="(max-width: 768px) 80vw, 240px"
                                            className="object-contain"
                                            priority={i === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                        {/* ROLE BADGE (iOS glass) */}
                                        <div className="absolute bottom-3 right-3 z-20">
                                            <div
                                                className="
                                                    px-3 py-1
                                                    rounded-full
                                                    text-[11px]
                                                    text-white/90
                                                    bg-gray-700/30 backdrop-blur-md
                                                    border border-white/20
                                                    shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                                                "
                                            >
                                                {doc.role}
                                            </div>
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-[14px] md:p-[16px]">
                                        <p className="font-semibold text-[18px] md:text-lg text-gray-900 text-center mb-1">
                                            {doc.name}
                                        </p>

                                        <p className="text-[11px] md:text-[12px] text-gray-500 text-center">
                                            {doc.hospital}
                                        </p>

                                        <div className="my-[10px] md:my-[12px] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-[3px]">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400 fill-yellow-400"
                                                    />
                                                ))}
                                                <span className="text-[12px] md:text-[13px] font-medium text-gray-700 ml-[4px]">
                                                    {doc.rating}
                                                </span>
                                            </div>

                                            <div className="text-[11px] md:text-[12px] text-gray-500">
                                                <span className="font-medium text-gray-800">
                                                    {doc.reviews}
                                                </span>{" "}
                                                ulasan
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <div className="hidden md:flex absolute right-0 bottom-0 gap-[10px]">
                            <button
                                onClick={() => scroll("left")}
                                className="bg-white/20 backdrop-blur-md border border-white/30 p-[10px] rounded-full hover:bg-white/30 transition"
                            >
                                <ChevronLeft className="text-white w-5 h-5" />
                            </button>

                            <button
                                onClick={() => scroll("right")}
                                className="bg-white/20 backdrop-blur-md border border-white/30 p-[10px] rounded-full hover:bg-white/30 transition"
                            >
                                <ChevronRight className="text-white w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
