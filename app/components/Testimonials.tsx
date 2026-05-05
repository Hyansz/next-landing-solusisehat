"use client";

import Container from "./Container";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Raihan Pratama",
        city: "Surakarta",
        text: "Awalnya agak ragu, tapi ternyata pelayanannya bagus banget. Perawatnya sabar dan jelas jelasin kondisi pasien.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    },
    {
        name: "Siti Aisyah",
        city: "Solo",
        text: "Alhamdulillah sangat terbantu, terutama pas orang tua lagi sakit di rumah. Responnya juga cepat.",
        avatar: null,
    },
    {
        name: "Budi Santoso",
        city: "Karanganyar",
        text: "Nggak ribet sama sekali, tinggal booking langsung datang ke rumah. Orangnya juga ramah jadi pasien lebih nyaman.",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
    },
];

// 🔥 warna avatar biar variasi premium
const avatarStyles = [
    "from-emerald-400 to-emerald-600",
    "from-sky-400 to-blue-600",
    "from-purple-400 to-indigo-600",
];

function getInitial(name: string) {
    return name?.charAt(0)?.toUpperCase() || "?";
}

function getAvatarColor(index: number) {
    return avatarStyles[index % avatarStyles.length];
}

export default function Testimonials() {
    return (
        <section className="relative scroll-mt-[100px] py-[90px] md:py-[120px] overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[#f9fafb]" />

            <div className="relative z-10">
                <Container>
                    {/* TITLE */}
                    <div className="text-center mb-[40px] md:mb-[64px] px-4">
                        <h2
                            id="testimoni"
                            className="text-[22px] md:text-[32px] font-semibold text-gray-900 tracking-tight"
                        >
                            Apa Kata Mereka?
                        </h2>
                        <p className="text-gray-500 text-[13px] md:text-[14px] mt-2 md:mt-3 max-w-[480px] mx-auto">
                            Pengalaman nyata dari pelanggan yang telah
                            menggunakan layanan kami
                        </p>
                    </div>

                    {/* MOBILE */}
                    <div className="md:hidden">
                        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-4">
                            {testimonials.map((item, i) => (
                                <div
                                    key={i}
                                    className="snap-start min-w-[85%] bg-white rounded-[18px] p-[20px] border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] active:scale-[0.98] transition"
                                >
                                    {/* STAR */}
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    <p className="text-[13px] text-gray-600 leading-relaxed">
                                        {item.text}
                                    </p>

                                    {/* USER */}
                                    <div className="flex items-center gap-3 mt-5">
                                        <div className="w-[38px] h-[38px] rounded-full overflow-hidden shadow-md bg-gray-200 flex items-center justify-center">
                                            {item.avatar ? (
                                                <img
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span
                                                    className={`
                                                        w-full h-full flex items-center justify-center
                                                        text-white text-sm font-semibold
                                                        bg-gradient-to-br ${getAvatarColor(i)}
                                                    `}
                                                >
                                                    {getInitial(item.name)}
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <p className="text-[13px] font-semibold text-gray-900">
                                                {item.name}
                                            </p>
                                            <p className="text-[11px] text-gray-500">
                                                {item.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden md:grid md:grid-cols-3 gap-[28px]">
                        {testimonials.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[20px] p-[24px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* STAR */}
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>

                                <p className="text-[14px] text-gray-600 leading-relaxed">
                                    {item.text}
                                </p>

                                {/* USER */}
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="w-[42px] h-[42px] rounded-full overflow-hidden shadow-md bg-gray-200 flex items-center justify-center">
                                        {item.avatar ? (
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span
                                                className={`
                                                    w-full h-full flex items-center justify-center
                                                    text-white text-sm font-semibold
                                                    bg-gradient-to-br ${getAvatarColor(i)}
                                                `}
                                            >
                                                {getInitial(item.name)}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <p className="text-[14px] font-semibold text-gray-900">
                                            {item.name}
                                        </p>
                                        <p className="text-[12px] text-gray-500">
                                            {item.city}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FOOTNOTE */}
                    <div className="mt-[40px] md:mt-[56px] text-center px-4 max-w-[600px] mx-auto">
                        <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                            Lebih dari{" "}
                            <span className="font-semibold text-gray-900">
                                500+ pelanggan
                            </span>{" "}
                            telah mempercayakan layanan kesehatan mereka kepada
                            kami.
                        </p>
                    </div>
                </Container>
            </div>
        </section>
    );
}
