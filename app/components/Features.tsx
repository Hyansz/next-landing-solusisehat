import Container from "./Container";
import { House, Stethoscope, User, HeartPulse } from "lucide-react";

const features = [
    {
        icon: House,
        title: "Home Visit Profesional",
        desc: "Tenaga kesehatan datang langsung ke rumah Anda untuk memberikan perawatan terbaik dengan standar medis.",
    },
    {
        icon: Stethoscope,
        title: "Dokter & Konsultasi",
        desc: "Konsultasi dengan dokter berpengalaman untuk diagnosis awal hingga tindak lanjut kesehatan Anda.",
    },
    {
        icon: User,
        title: "Caregiver Terlatih",
        desc: "Pendamping profesional untuk lansia dan pasien dengan pendekatan yang penuh empati dan perhatian.",
    },
    {
        icon: HeartPulse,
        title: "Perawatan Berkelanjutan",
        desc: "Layanan monitoring dan perawatan rutin untuk memastikan kondisi pasien tetap stabil dan terjaga.",
    },
];

export default function Features() {
    return (
        <section id="layanan" className="scroll-mt-[100px] py-16 md:py-[80px] bg-[#f9fafb]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
                    {features.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className="
                                    group
                                    bg-white
                                    p-6
                                    rounded-2xl
                                    border border-gray-100
                                    shadow-sm
                                    hover:shadow-lg
                                    hover:-translate-y-1
                                    transition-all duration-300
                                    active:scale-[0.97]
                                    active:shadow-md
                                    active:bg-gray-50
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-blue-500/30
                                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                                        w-12 h-12
                                        flex items-center justify-center
                                        rounded-xl
                                        bg-blue-50
                                        text-blue-600
                                        mb-4
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                        transition
                                    "
                                >
                                    <Icon className="w-5 h-5" />
                                </div>

                                {/* TITLE */}
                                <h3 className="font-semibold text-[16px] text-gray-900 mb-2">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-[14px] text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
