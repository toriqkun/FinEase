import { motion } from "framer-motion";
import { ArrowRight, Bot, FileSpreadsheet, Wallet, Sun, Moon, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Button = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={`inline-flex items-center justify-center font-medium transition-all ${className}`}>
    {children}
  </button>
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleTelegram = () => {
    window.open("https://t.me/fineasebot", "_blank");
  };

  return (
    <div className={`w-full ${darkMode ? "dark" : ""}`}>
      <div className="bg-blue-50 dark:bg-slate-950 text-slate-800 dark:text-gray-100 min-h-screen overflow-x-hidden transition-colors duration-500">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-3 px-5 md:px-10 lg:px-20 z-10 bg-blue-50/70 dark:bg-slate-950/70 backdrop-blur-md">
          <div className="flex items-center text-xl gap-2">
            <div className="w-9 h-9 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white">F</div>
            <span className="font-bold text-xl">FinEase</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-gray-100 flex items-center justify-center"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button onClick={handleTelegram} className="bg-blue-600 hover:bg-blue-700 text-white px-4 hide-500 sm:px-6 py-2 text-sm sm:text-base rounded-[5px] shadow cursor-pointer">
              Mulai Sekarang
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-[1420px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 pt-32 pb-16 sm:pb-38 gap-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Catat, Kelola, dan <br /> <span className="text-blue-600">Otomatiskan Keuanganmu</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg mb-8">
              FinEase membantu kamu mencatat pengeluaran harian, mingguan, dan bulanan langsung lewat <b>Telegram</b> — semua data tersimpan otomatis di <b>Google Spreadsheet</b>.
            </p>
            <Button
              onClick={handleTelegram}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base sm:text-lg rounded-2xl flex items-center justify-center gap-2 shadow cursor-pointer mx-auto md:mx-0"
            >
              Coba Sekarang <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* Right - Hero Illustration */}
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative md:w-1/2 flex justify-center">
            <div className="bg-blue-100 dark:bg-slate-800 rounded-3xl relative overflow-hidden w-[280px] sm:w-[380px] md:w-[450px]">
              <img src="/1.webp" alt="KasMini Illustration" className="rounded-2xl object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-900/10 rounded-3xl"></div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-blue-600">Fitur Utama FinEase</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bot className="h-10 w-10 text-blue-600 mx-auto" />,
                  title: "Catat via Telegram",
                  desc: "Kirim pesan ke bot FinEase untuk menambah pengeluaran tanpa buka aplikasi lain.",
                },
                {
                  icon: <FileSpreadsheet className="h-10 w-10 text-emerald-500 mx-auto" />,
                  title: "Tersinkron ke Google Sheets",
                  desc: "Semua transaksi tersimpan otomatis dan rapi di Google Spreadsheet.",
                },
                {
                  icon: <Wallet className="h-10 w-10 text-blue-600 mx-auto" />,
                  title: "Rekap & Analisis Otomatis",
                  desc: "Dapatkan laporan keuangan harian, mingguan, dan bulanan langsung di chat Telegram.",
                },
              ].map((f, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 transition">
                  {f.icon}
                  <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">{f.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-30 max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:w-1/2 flex justify-center">
            <img src="/2.webp" alt="Tentang KasMini" className="rounded-2xl w-[280px] sm:w-[400px] md:w-[480px] object-cover bg-gradient-to-tr from-blue-600/10 to-cyan-900/10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600">Tentang FinEase</h2>
            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              FinEase lahir untuk membantu kamu mengelola keuangan pribadi tanpa ribet. Dengan menggabungkan kekuatan <b>n8n automation</b>, <b>Telegram bot</b>, dan <b>Google Sheets</b>, semua
              pencatatan pengeluaran menjadi otomatis dan mudah diakses kapan saja.
            </p>
            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">Fokus pada hidupmu, biarkan FinEase mengurus keuangannya.</p>
          </motion.div>
        </section>

        <footer className="bg-blue-800 text-white flex flex-col px-6 sm:px-10 lg:px-20 py-10 pb-5">
          <div className="w-full mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-15">
            <div className="lg:w-250 text-start">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">FinEase</h3>
              <p className="text-sm sm:text-base text-justify opacity-80 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos modi rerum omnis adipisci eius similique sed saepe blanditiis! Architecto repellat voluptate consequatur adipisci cum
                officia maiores eum natus doloremque, distinctio voluptas hic illo nobis aperiam aliquam perspiciatis.
              </p>
              <button
                onClick={() => window.open("https://t.me/fineasebot", "_blank")}
                className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold mt-4 hover:bg-gray-100 transition text-sm sm:text-base cursor-pointer"
              >
                Coba Sekarang
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-around lg:justify-evenly w-full gap-8 mt-0 sm:mt-5">
              <div>
                <h4 className="font-semibold text-lg mb-3">Company</h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="text-white/70 hover:text-white">About</li>
                  <li className="text-white/70 hover:text-white">Workflow</li>
                  <li className="text-white/70 hover:text-white">Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Support</h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="text-white/70 hover:text-white">Help Center</li>
                  <li className="text-white/70 hover:text-white">Privacy Policy</li>
                  <li className="text-white/70 hover:text-white">Terms of Service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Get in Touch</h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="text-white/70 hover:text-white">
                    <a href="https://www.facebook.com/ToriqKuN0" target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li className="text-white/70 hover:text-white">
                    <a href="https://www.instagram.com/toriqrosid_/" target="_blank">
                      Instagram
                    </a>
                  </li>
                  <li className="text-white/70 hover:text-white">
                    <a href="https://x.com/Icunn1336341" target="_blank">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-md opacity-90 border-t border-white/20 pt-6">© {new Date().getFullYear()} FinEase. All rights reserved.</div>
        </footer>

        {/* Scroll To Top */}
        {showTopBtn && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg z-50"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
