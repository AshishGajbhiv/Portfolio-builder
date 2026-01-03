import { usePortfolio } from "../context/PortfolioContext";
import { Github, Linkedin, ExternalLink, Instagram, Twitter, Globe } from "lucide-react";
import { cn } from "../utils/cn";

export default function LivePreview() {
    const { portfolioData, theme } = usePortfolio();

    const getThemeStyles = () => {
        switch (theme) {
            case 'dark':
                return "bg-zinc-950 text-white font-sans";
            case 'creative':
                return "bg-[#fdfcf0] text-[#1a1a1a] font-serif";
            case 'glass':
                return "bg-white/10 backdrop-blur-xl border border-white/20 text-indigo-900 font-sans shadow-2xl";
            case 'cyber':
                return "bg-zinc-900 text-cyan-400 font-mono border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.5)]";
            default: // minimal
                return "bg-white text-zinc-900 font-sans";
        }
    };

    return (
        <div className={cn(
            "w-full h-full min-h-[600px] overflow-auto shadow-2xl rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 relative",
            getThemeStyles(),
            theme === 'glass' ? "bg-gradient-to-br from-indigo-50 to-pink-50" : ""
        )}>
            {theme === 'cyber' && (
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%]" />
            )}

            {/* Header */}
            <header className="mb-16 relative z-20">
                <h1 className={cn(
                    "text-4xl md:text-5xl font-black tracking-tight mb-4",
                    theme === 'creative' ? "italic text-indigo-600" : "",
                    theme === 'cyber' ? "uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500" : ""
                )}>
                    {portfolioData.personal.name || "Your Name"}
                </h1>
                <p className={cn(
                    "text-xl font-medium",
                    theme === 'creative' ? "text-pink-500" :
                        theme === 'cyber' ? "text-cyan-300" : "text-zinc-500"
                )}>
                    {portfolioData.personal.role || "Your Role"}
                </p>

                <div className="flex gap-4 mt-8">
                    {portfolioData.personal.links.github && (
                        <a href={portfolioData.personal.links.github} target="_blank" className="hover:scale-110 transition-transform"><Github size={20} /></a>
                    )}
                    {portfolioData.personal.links.linkedin && (
                        <a href={portfolioData.personal.links.linkedin} target="_blank" className="hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                    )}
                    {portfolioData.personal.links.twitter && (
                        <a href={portfolioData.personal.links.twitter} target="_blank" className="hover:scale-110 transition-transform"><Twitter size={20} /></a>
                    )}
                    {portfolioData.personal.links.instagram && (
                        <a href={portfolioData.personal.links.instagram} target="_blank" className="hover:scale-110 transition-transform"><Instagram size={20} /></a>
                    )}
                </div>
            </header>

            {/* Bio */}
            <section className="mb-16 relative z-20">
                <h2 className={cn(
                    "text-xs uppercase tracking-[0.2em] font-bold mb-4",
                    theme === 'cyber' ? "text-fuchsia-500" : "text-zinc-400"
                )}>About</h2>
                <p className="text-lg leading-relaxed max-w-2xl opacity-80">
                    {portfolioData.personal.bio || "Write your bio to see it here..."}
                </p>
            </section>

            {/* Skills */}
            <section className="mb-16 relative z-20">
                <h2 className={cn(
                    "text-xs uppercase tracking-[0.2em] font-bold mb-6",
                    theme === 'cyber' ? "text-fuchsia-500" : "text-zinc-400"
                )}>Expertise</h2>
                <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.map((skill, i) => (
                        <span key={i} className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium",
                            theme === 'creative' ? "bg-amber-100 text-amber-900 border border-amber-200" :
                                theme === 'cyber' ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30" :
                                    theme === 'glass' ? "bg-white/40 border border-white/60" :
                                        "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        )}>
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="relative z-20">
                <h2 className={cn(
                    "text-xs uppercase tracking-[0.2em] font-bold mb-8",
                    theme === 'cyber' ? "text-fuchsia-500" : "text-zinc-400"
                )}>Featured Work</h2>
                <div className="grid gap-8">
                    {portfolioData.projects.map((project) => (
                        <div key={project.id} className={cn(
                            "group p-6 rounded-3xl transition-all",
                            theme === 'creative' ? "bg-white border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" :
                                theme === 'cyber' ? "bg-black/40 border border-cyan-500/20 hover:border-cyan-500/60 shadow-lg" :
                                    theme === 'glass' ? "bg-white/30 backdrop-blur-md border border-white/40 shadow-xl" :
                                        theme === 'dark' ? "bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600" :
                                            "bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                        )}>
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className={cn(
                                        "text-xl font-bold mb-1",
                                        theme === 'minimal' ? "text-zinc-900 dark:text-white" : 
                                        theme === 'dark' ? "text-white" : ""
                                    )}>{project.title}</h3>
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" className={cn(
                                                "text-xs flex items-center gap-1 transition-colors",
                                                theme === 'minimal' ? "text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400" : 
                                                theme === 'dark' ? "text-zinc-400 hover:text-blue-400" : 
                                                "text-zinc-400 hover:text-blue-500"
                                            )}>
                                                <Github size={12} /> Repo
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" className={cn(
                                                "text-xs flex items-center gap-1 transition-colors",
                                                theme === 'minimal' ? "text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400" : 
                                                theme === 'dark' ? "text-zinc-400 hover:text-blue-400" : 
                                                "text-zinc-400 hover:text-blue-500"
                                            )}>
                                                <Globe size={12} /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <ExternalLink size={18} className={cn(
                                    "transition-colors",
                                    theme === 'dark' ? "text-zinc-400 group-hover:text-blue-400" : "text-zinc-400 group-hover:text-blue-500"
                                )} />
                            </div>
                            <p className={cn(
                                "text-sm leading-relaxed mb-4",
                                theme === 'minimal' ? "text-zinc-700 dark:text-zinc-300" : 
                                theme === 'dark' ? "text-zinc-300" : 
                                "opacity-70"
                            )}>{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech?.map((t, i) => (
                                    <span key={i} className={cn(
                                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded",
                                        theme === 'minimal' ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400" : 
                                        theme === 'dark' ? "bg-zinc-700 text-zinc-300" : 
                                        "text-zinc-400"
                                    )}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
