import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";
import FormEditor from "../components/FormEditor";
import LivePreview from "../components/LivePreview";
import { cn } from "../utils/cn";
import { Monitor, Smartphone, Palette, Check, ExternalLink, Copy, CheckCheck } from "lucide-react";
import { generatePortfolioHTML } from "../utils/generateHTML";

export default function BuilderPage() {
    const { theme, setTheme, portfolioData } = usePortfolio();
    const [previewMode, setPreviewMode] = useState('desktop'); // desktop, mobile
    const [copied, setCopied] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.initialTheme) {
            setTheme(location.state.initialTheme);
        }
    }, [location.state, setTheme]);

    const handleCopyCode = async () => {
        try {
            const htmlCode = generatePortfolioHTML(portfolioData, theme);
            await navigator.clipboard.writeText(htmlCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
            alert('Failed to copy code. Please try again.');
        }
    };

    const themes = [
        { id: 'minimal', name: 'Minimal', class: 'bg-white border-zinc-200' },
        { id: 'dark', name: 'Dark Pro', class: 'bg-zinc-900 border-zinc-800' },
        { id: 'creative', name: 'Neo-Bento', class: 'bg-amber-50 border-amber-200' },
        { id: 'glass', name: 'Glass', class: 'bg-white/50 border-white/20' },
        { id: 'cyber', name: 'Cyberpunk', class: 'bg-cyan-900 border-cyan-500' },
    ];

    return (
        <div className="pt-24 pb-12 px-4 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
            <div className="max-w-[1700px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left Column: Editor */}
                    <div className="w-full lg:w-[45%] space-y-8">
                        <header className="flex flex-col gap-4">
                            <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">Folio Builder</h1>

                            {/* Theme Selector */}
                            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide py-2">
                                {themes.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTheme(t.id)}
                                        className={cn(
                                            "flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-2xl border text-sm font-bold transition-all duration-300",
                                            theme === t.id
                                                ? "border-blue-600 ring-4 ring-blue-600/10 bg-blue-50 dark:bg-blue-900/20 text-blue-600 shadow-lg"
                                                : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 hover:border-zinc-300"
                                        )}
                                    >
                                        <div className={cn("w-4 h-4 rounded-full shadow-inner", t.class)} />
                                        {t.name}
                                        {theme === t.id && <Check size={14} />}
                                    </button>
                                ))}
                            </div>
                        </header>

                        <FormEditor />
                    </div>

                    {/* Right Column: Preview */}
                    <div className="w-full lg:w-[55%] lg:sticky lg:top-24 flex flex-col items-center">
                        <div className="flex items-center justify-between w-full mb-6 px-4">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 text-zinc-500 font-bold bg-white dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                                    <Palette size={18} className="text-blue-500" />
                                    <span className="text-xs uppercase tracking-widest text-zinc-400">Preview Hub</span>
                                </div>
                                <button
                                    onClick={() => window.open(`${import.meta.env.BASE_URL}preview?theme=${theme}`, '_blank')}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                                    title="Open preview in new tab"
                                >
                                    <ExternalLink size={16} />
                                    View in Another Tab
                                </button>
                            </div>
                            <div className="flex gap-2 bg-white dark:bg-zinc-900 p-1 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                                <button
                                    onClick={() => setPreviewMode('desktop')}
                                    className={cn(
                                        "p-2.5 rounded-lg transition-all",
                                        previewMode === 'desktop' ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600" : "text-zinc-400 hover:text-zinc-600"
                                    )}
                                >
                                    <Monitor size={18} />
                                </button>
                                <button
                                    onClick={() => setPreviewMode('mobile')}
                                    className={cn(
                                        "p-2.5 rounded-lg transition-all",
                                        previewMode === 'mobile' ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600" : "text-zinc-400 hover:text-zinc-600"
                                    )}
                                >
                                    <Smartphone size={18} />
                                </button>
                            </div>
                        </div>

                        <div className={cn(
                            "relative group transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                            previewMode === 'mobile' ? "w-[375px] max-w-full" : "w-full"
                        )}>
                            <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[2.8rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className={cn(
                                "relative border-8 border-zinc-900 dark:border-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] min-h-[700px] transition-all duration-700 overflow-hidden",
                                previewMode === 'mobile' ? "rounded-[3rem]" : "rounded-[2.5rem]"
                            )}>
                                <LivePreview />
                            </div>

                            {/* Mobile Camera Notch Mockup */}
                            {previewMode === 'mobile' && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 dark:border-zinc-800 rounded-b-2xl z-50 flex items-center justify-center">
                                    <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* Copy Code Button */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={handleCopyCode}
                        className={cn(
                            "flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl",
                            copied
                                ? "bg-green-600 text-white"
                                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-105 active:scale-95"
                        )}
                        disabled={copied}
                    >
                        {copied ? (
                            <>
                                <CheckCheck size={24} />
                                Code Copied!
                            </>
                        ) : (
                            <>
                                <Copy size={24} />
                                Copy Code (HTML, CSS)
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
