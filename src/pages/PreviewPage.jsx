import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";
import LivePreview from "../components/LivePreview";
import { cn } from "../utils/cn";
import { Monitor, Smartphone, X } from "lucide-react";

export default function PreviewPage() {
    const [searchParams] = useSearchParams();
    const { setTheme } = usePortfolio();
    const [previewMode, setPreviewMode] = useState('desktop');

    // Set theme from URL parameter on mount
    useEffect(() => {
        const themeParam = searchParams.get('theme');
        if (themeParam) {
            setTheme(themeParam);
        }
    }, [searchParams, setTheme]);

    return (
        <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 flex flex-col">
            {/* Top Bar with Controls */}
            <div className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-lg">
                <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Portfolio Preview</h1>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                            Live Preview
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Desktop/Mobile Toggle */}
                        <div className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700">
                            <button
                                onClick={() => setPreviewMode('desktop')}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all font-semibold text-sm",
                                    previewMode === 'desktop'
                                        ? "bg-white dark:bg-zinc-900 text-blue-600 shadow-md"
                                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                                )}
                            >
                                <Monitor size={18} />
                                Desktop
                            </button>
                            <button
                                onClick={() => setPreviewMode('mobile')}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all font-semibold text-sm",
                                    previewMode === 'mobile'
                                        ? "bg-white dark:bg-zinc-900 text-blue-600 shadow-md"
                                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                                )}
                            >
                                <Smartphone size={18} />
                                Mobile
                            </button>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => window.close()}
                            className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
                            title="Close Preview"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className={cn(
                    "relative transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                    previewMode === 'mobile' ? "w-[375px] max-w-full" : "w-full max-w-[1400px]"
                )}>
                    <div className={cn(
                        "relative border-8 border-zinc-900 dark:border-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] min-h-[700px] transition-all duration-700 overflow-hidden bg-white",
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
    );
}
