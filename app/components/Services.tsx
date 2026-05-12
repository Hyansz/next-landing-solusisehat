import Container from "./Container";
import {
    Stethoscope,
    Video,
    HeartPulse,
    User,
    Activity,
    ClipboardList,
} from "lucide-react";

const services = [
    {
        icon: Stethoscope,
        title: "Home Visit",
        desc: "Layanan dokter, perawat, bidan, caregiver, dan fisioterapis profesional langsung ke rumah untuk pemeriksaan dan tindakan medis.",
    },
    {
        icon: Video,
        title: "Konsultasi Online",
        desc: "Konsultasi kesehatan praktis melalui video call dengan tenaga medis berpengalaman.",
    },
    {
        icon: User,
        title: "Perawat Profesional",
        desc: "Perawatan harian oleh perawat terlatih untuk pasien dengan kebutuhan khusus.",
    },
    {
        icon: HeartPulse,
        title: "Perawatan Lansia",
        desc: "Pendampingan lansia dengan pendekatan empati dan perhatian penuh setiap hari.",
    },
    {
        icon: Activity,
        title: "Fisioterapi",
        desc: "Terapi pemulihan untuk meningkatkan mobilitas dan kualitas hidup pasien.",
    },
    {
        icon: ClipboardList,
        title: "Monitoring Kesehatan",
        desc: "Pemantauan kondisi pasien secara berkala untuk menjaga stabilitas kesehatan.",
    },
];

export default function Services() {
    return (
        <section className="py-16 md:py-[96px] bg-[#f9fafb]">
            <Container>
                {/* TITLE */}
                <div className="text-center max-w-xl mx-auto mb-12 md:mb-[64px]">
                    <h2 className="text-2xl md:text-[28px] font-semibold text-gray-900 leading-tight">
                        Segala Kemudahan Dalam Genggaman
                    </h2>

                    <p className="mt-3 text-sm md:text-[14px] text-gray-600 leading-relaxed">
                        Layanan homecare lengkap dengan tenaga profesional untuk
                        memastikan kesehatan keluarga Anda tetap terjaga.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[28px]">
                    {services.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className="
                                    group
                                    bg-white
                                    p-6 md:p-[28px]
                                    rounded-2xl
                                    border border-gray-100
                                    shadow-sm

                                    hover:shadow-lg hover:-translate-y-1
                                    active:scale-[0.98] active:shadow-md active:bg-gray-50

                                    transition duration-200
                                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                                        w-12 h-12 md:w-[52px] md:h-[52px]
                                        flex items-center justify-center
                                        rounded-xl
                                        bg-blue-50
                                        text-blue-600
                                        mb-4 md:mb-[18px]

                                        group-hover:bg-blue-600
                                        group-hover:text-white

                                        group-active:scale-90
                                        group-active:bg-blue-600
                                        group-active:text-white

                                        transition
                                    "
                                >
                                    <Icon className="w-5 h-5" />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-[15px] md:text-[16px] font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
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
