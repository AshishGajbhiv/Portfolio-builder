import { useNavigate } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";
import { Sun, Moon, Sparkles } from "lucide-react";
import { cn } from "../utils/cn";

export default function Navbar() {
    const { isDarkMode, setIsDarkMode } = usePortfolio();
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
                        Folio<span className="text-blue-600">Sync</span>
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => navigate('/builder')}
                        className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform active:scale-95"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
