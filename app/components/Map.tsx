"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🟢 Custom marker
const greenIcon = L.divIcon({
    className: "custom-marker",
    html: `
        <div class="marker-wrapper">
            <span class="marker-shadow"></span>
            <span class="marker-core"></span>
        </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
});

// 📍 Surakarta
const location = {
    name: "Surakarta",
    position: [-7.5666, 110.8167] as [number, number],
};

const handleWhatsApp = () => {
    const phoneNumber = "6285111313157"; // ganti dengan nomor WA bisnis kamu

    const message = encodeURIComponent(
        `Halo SolusiSehat, Saya ingin konsultasi layanan home care di area ${location.name}.\nApakah bisa dibantu?`,
    );

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
};

// 🔥 Fly animation
function FlyTo({ position }: { position: [number, number] }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(position, 13, { duration: 1.2 });
    }, [position, map]);

    return null;
}

export default function Map() {
    const images = [
        "https://images.unsplash.com/photo-1692548912452-261ede1babe0?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1652112931238-06f8667fd9bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VyYWthcnRhfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1618652109044-22ec124cc4ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VyYWthcnRhfGVufDB8fDB8fHww",
    ];

    const [mounted, setMounted] = useState(false);
    const [active, setActive] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    const sliderRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentTranslate = useRef(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // 🔥 AUTO SLIDE
    useEffect(() => {
        if (!active) return;

        const interval = setInterval(() => {
            setImgIndex((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [active]);

    // 🔥 DRAG HANDLER
    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;

        const diff = e.clientX - startX.current;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                setImgIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                );
            } else {
                setImgIndex((prev) => (prev + 1) % images.length);
            }

            isDragging.current = false;
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    if (!mounted) return null;

    return (
        <div className="relative w-full h-[420px]">
            {/* 🌍 MAP */}
            {/* @ts-ignore */}
            <MapContainer
                center={location.position}
                zoom={12}
                scrollWheelZoom={true}
                className="h-full w-full rounded-[28px] z-0"
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                <Marker
                    position={location.position}
                    icon={greenIcon}
                    eventHandlers={{
                        click: () => setActive(true),
                    }}
                />

                {active && <FlyTo position={location.position} />}
            </MapContainer>

            {/* 🔥 OVERLAY */}
            <div
                className={`
                    absolute inset-0 z-40
                    bg-black/30 backdrop-blur-[2px]
                    transition duration-500
                    ${active ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setActive(false)}
            />

            {/* 🔥 PANEL */}
            <div
                className={`
                    absolute top-0 right-0 h-full w-[380px]
                    z-50
                    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${active ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                `}
            >
                <div
                    className="
                        h-full
                        bg-white/80
                        backdrop-blur-2xl
                        border-l border-white/30
                        shadow-[0_40px_120px_rgba(0,0,0,0.25)]
                        flex flex-col
                        overflow-hidden
                    "
                >
                    {/* 🔝 HEADER */}
                    <div className="p-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-[20px] font-semibold text-gray-900">
                                    Surakarta
                                </h3>
                                <p className="text-[12px] text-gray-500">
                                    Area Layanan Aktif
                                </p>
                            </div>

                            <span className="text-[11px] px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">
                                Aktif
                            </span>
                        </div>
                    </div>

                    {/* 📦 CONTENT (SCROLLABLE) */}
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                        {/* IMAGE SLIDER */}
                        <div
                            ref={sliderRef}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            className="relative h-[160px] rounded-[18px] overflow-hidden cursor-grab active:cursor-grabbing"
                        >
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className={`
                                        absolute inset-0 w-full h-full object-cover
                                        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                                        ${
                                            i === imgIndex
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-105"
                                        }
                                    `}
                                />
                            ))}

                            {/* overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            {/* dots */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`
                                            h-[6px] rounded-full transition-all duration-300
                                            ${
                                                i === imgIndex
                                                    ? "w-[18px] bg-white"
                                                    : "w-[6px] bg-white/40"
                                            }
                                        `}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white/60 rounded-[12px] p-3 text-center backdrop-blur">
                                <p className="text-[15px] font-semibold">50+</p>
                                <p className="text-[11px] text-gray-500">
                                    Tenaga
                                </p>
                            </div>

                            <div className="bg-white/60 rounded-[12px] p-3 text-center backdrop-blur">
                                <p className="text-[15px] font-semibold">
                                    24 Jam
                                </p>
                                <p className="text-[11px] text-gray-500">
                                    Layanan
                                </p>
                            </div>

                            <div className="bg-white/60 rounded-[12px] p-3 text-center backdrop-blur">
                                <p className="text-[15px] font-semibold">
                                    4.9★
                                </p>
                                <p className="text-[11px] text-gray-500">
                                    Rating
                                </p>
                            </div>
                        </div>

                        {/* DESC */}
                        <p className="text-[13px] text-gray-600 leading-relaxed">
                            Layanan homecare profesional tersedia di seluruh
                            wilayah Surakarta dengan tenaga medis berpengalaman
                            langsung ke rumah Anda.
                        </p>

                        {/* LIST */}
                        <div className="space-y-2 text-[13px]">
                            {[
                                "Dokter & Perawat tersedia",
                                "Kunjungan ke rumah",
                                "Respon cepat < 30 menit",
                                "Layanan 24 jam nonstop",
                                "Didukung tenaga profesional",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 text-gray-700"
                                >
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🔘 FOOTER */}
                    <div className="py-3 px-6 border-t border-gray-100 flex items-center justify-center gap-3">
                        <button
                            onClick={handleWhatsApp}
                            className="
                                w-full
                                bg-green-600 hover:bg-green-700
                                text-white
                                text-base
                                py-2 
                                rounded-[12px]
                                transition
                                shadow-md 
                                hover:shadow-lg
                                hover:scale-105 
                                duration-300
                                cursor-pointer
                            "
                        >
                            Pesan Layanan
                        </button>

                        <button
                            onClick={() => setActive(false)}
                            className="w-full text-base text-gray-500 bg-white hover:scale-105 duration-300 py-2 rounded-[12px] transition shadow-md hover:shadow-lg cursor-pointer"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
