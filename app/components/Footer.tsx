import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import PrivacyTermsModal from "./PrivacyTermsModal";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 px-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 md:pt-16 pb-8">
                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10">
                    {/* LEFT - Brand */}
                    <div className="space-y-4 md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start">
                        <img
                            src="./img/logo1.webp"
                            alt="SolusiSehat Logo"
                            className="h-10 md:h-11 object-contain"
                        />

                        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                            SolusiSehat menyediakan layanan home care
                            profesional untuk membantu Anda dan keluarga
                            mendapatkan perawatan terbaik langsung dari rumah.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs">
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500">
                                #PelayananTerbaik
                            </span>
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500">
                                #BersamaSolusiSehat
                            </span>
                        </div>
                    </div>

                    {/* MIDDLE - Navigation */}
                    <div className="flex flex-col items-center md:items-start gap-3 text-sm text-center md:text-left">
                        <h4 className="text-gray-900 font-semibold mb-2">
                            Navigasi
                        </h4>

                        <a
                            href="#home"
                            className="text-gray-500 hover:text-gray-900 transition"
                        >
                            Home
                        </a>
                        <a
                            href="#layanan"
                            className="text-gray-500 hover:text-gray-900 transition"
                        >
                            Layanan
                        </a>
                        <a
                            href="#area"
                            className="text-gray-500 hover:text-gray-900 transition"
                        >
                            Area
                        </a>
                        <a
                            href="#kontak"
                            className="text-gray-500 hover:text-gray-900 transition"
                        >
                            Kontak
                        </a>
                        <a
                            href="#testimoni"
                            className="text-gray-500 hover:text-gray-900 transition"
                        >
                            Testimoni
                        </a>
                    </div>

                    {/* RIGHT - Social */}
                    <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                        <h4 className="text-gray-900 font-semibold">
                            Terhubung
                        </h4>

                        <div className="flex items-center justify-center md:justify-start gap-4">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/homecaresolusisehat"
                                target="_blank"
                                className="
                                    group relative
                                    w-11 h-11
                                    flex items-center justify-center
                                    rounded-full
                                    bg-white/60 backdrop-blur-xl
                                    border border-white/40
                                    shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                                    transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(236,72,153,0.25)]
                                "
                            >
                                <FaInstagram
                                    size={18}
                                    className="text-gray-500 group-hover:text-pink-500 transition"
                                />
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://www.tiktok.com/@homecaresolusisehat"
                                target="_blank"
                                className="
                                    group relative
                                    w-11 h-11
                                    flex items-center justify-center
                                    rounded-full
                                    bg-white/60 backdrop-blur-xl
                                    border border-white/40
                                    shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                                    transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]
                                "
                            >
                                <FaTiktok
                                    size={17}
                                    className="text-gray-500 group-hover:text-black transition"
                                />
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://web.facebook.com/homecaresolusisehat/"
                                target="_blank"
                                className="
                                    group relative
                                    w-11 h-11
                                    flex items-center justify-center
                                    rounded-full
                                    bg-white/60 backdrop-blur-xl
                                    border border-white/40
                                    shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                                    transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(37,99,235,0.25)]
                                "
                            >
                                <FaFacebook
                                    size={17}
                                    className="text-gray-500 group-hover:text-blue-600 transition"
                                />
                            </a>

                            {/* Gmail */}
                            <a
                                href="mailto:homecaresolusisehat@gmail.com"
                                className="
                                    group relative
                                    w-11 h-11
                                    flex items-center justify-center
                                    rounded-full
                                    bg-white/60 backdrop-blur-xl
                                    border border-white/40
                                    shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                                    transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(239,68,68,0.25)]
                                "
                            >
                                <SiGmail
                                    size={17}
                                    className="text-gray-500 group-hover:text-red-500 transition"
                                />
                            </a>
                        </div>

                        <p className="text-xs text-gray-400 max-w-[220px]">
                            Ikuti kami untuk update layanan dan tips kesehatan.
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400 text-center sm:text-left">
                    <p>© 2026 SolusiSehat. All rights reserved.</p>

                    <div className="flex gap-5">
                        <PrivacyTermsModal />
                    </div>
                </div>
            </div>
        </footer>
    );
}
