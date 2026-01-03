import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Shield, Palette, Layout, ArrowRight, Monitor, Smartphone, Sparkles, Zap, ShieldCheck } from "lucide-react";

// Simple utility function for conditionally joining class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function LandingPage() {
    const navigate = useNavigate();

    const handleTemplateSelect = (themeId) => {
        navigate('/builder', { state: { initialTheme: themeId } });
    };

    const scrollToTemplates = () => {
        document.getElementById('templates-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="pt-16 min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative px-4 pt-32 pb-24 max-w-7xl mx-auto text-center">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8 border border-blue-200/50 dark:border-blue-800/50">
                        <Sparkles size={14} /> The New Standard for Student Portfolios
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                        Build a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Premium</span> <br />
                        Digital Identity.
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={() => navigate('/builder')}
                            className="group bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                        >
                            Start Building <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={scrollToTemplates}
                            className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-sm flex items-center gap-2"
                        >
                            View Templates <Layout size={20} className="text-blue-600" />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="px-4 py-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-10">
                    <FeatureCard
                        icon={<Zap className="text-orange-500" />}
                        title="Instant Live Sync"
                        description="Edit your details and see the preview update in real-time. What you see is what you get."
                    />
                    <FeatureCard
                        icon={<Palette className="text-indigo-500" />}
                        title="Premium Themes"
                        description="Handcrafted templates spanning from Minimal to Cyberpunk, tailored for modern aesthetics."
                    />
                    <FeatureCard
                        icon={<ShieldCheck className="text-emerald-500" />}
                        title="Mobile Perfect"
                        description="Your portfolio automatically adjusts for every device. Desktop power, mobile elegance."
                    />
                </div>
            </section>

            {/* Templates Section */}
            <section id="templates-section" className="px-4 py-32 bg-white dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Choose Your Style</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto font-medium">
                            Pick a template to get started. You can always switch themes later in the builder.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TemplateCard
                            id="minimal"
                            name="Minimal"
                            description="Clean, spacious, and professional."
                            onSelect={() => handleTemplateSelect('minimal')}
                        />
                        <TemplateCard
                            id="dark"
                            name="Dark Pro"
                            description="Sleek, deep blacks and modern fonts."
                            onSelect={() => handleTemplateSelect('dark')}
                        />
                        <TemplateCard
                            id="creative"
                            name="Neo-Bento"
                            description="Playful, bold, and high-energy."
                            onSelect={() => handleTemplateSelect('creative')}
                        />
                        <TemplateCard
                            id="glass"
                            name="Glassmorphism"
                            description="Soft blurs and vibrant gradients."
                            onSelect={() => handleTemplateSelect('glass')}
                        />
                        <TemplateCard
                            id="cyber"
                            name="Cyberpunk"
                            description="Neon glow and high-tech aesthetics."
                            onSelect={() => handleTemplateSelect('cyber')}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 dark:shadow-none hover:border-zinc-200 dark:hover:border-zinc-700 transition-all group"
        >
            <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>
    );
}

function TemplateCard({ id, name, description, onSelect }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-100 dark:shadow-none flex flex-col items-center text-center group cursor-pointer"
            onClick={onSelect}
        >
            <div className="w-full aspect-video rounded-2xl mb-6 border border-zinc-200 dark:border-zinc-700 shadow-inner transition-all overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                <img
                    src={`${import.meta.env.BASE_URL}templates/${id}.png`}
                    alt={`${name} template preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <h4 className="text-xl font-bold mb-2">{name}</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6 font-medium">{description}</p>
            <button className="w-full py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                Use Template
            </button>
        </motion.div>
    );
}
