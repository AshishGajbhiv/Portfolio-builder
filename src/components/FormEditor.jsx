import { usePortfolio } from "../context/PortfolioContext";
import { User, Code, Briefcase, Plus, Trash2, Github, Linkedin, Twitter, Instagram, Globe, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";

export default function FormEditor() {
    const { portfolioData, updatePersonal, addSkill, removeSkill, addProject, updateProject, removeProject } = usePortfolio();
    const [newSkill, setNewSkill] = useState("");

    return (
        <div className="flex flex-col gap-10">
            {/* Personal Info */}
            <FormSection icon={<User className="w-5 h-5 text-blue-500" />} title="Personal Details">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputGroup
                        label="Full Name"
                        value={portfolioData.personal.name}
                        onChange={(v) => updatePersonal({ name: v })}
                        placeholder="John Doe"
                    />
                    <InputGroup
                        label="Role"
                        value={portfolioData.personal.role}
                        onChange={(v) => updatePersonal({ role: v })}
                        placeholder="Student / Developer"
                    />
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Bio</label>
                        <textarea
                            value={portfolioData.personal.bio}
                            onChange={(e) => updatePersonal({ bio: e.target.value })}
                            className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[100px]"
                            placeholder="Tell about yourself..."
                        />
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <label className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-4">Social Links</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SocialInput icon={<Github size={16} />} value={portfolioData.personal.links.github} onChange={(v) => updatePersonal({ links: { github: v } })} placeholder="GitHub Link" />
                        <SocialInput icon={<Linkedin size={16} />} value={portfolioData.personal.links.linkedin} onChange={(v) => updatePersonal({ links: { linkedin: v } })} placeholder="LinkedIn Link" />
                        <SocialInput icon={<Twitter size={16} />} value={portfolioData.personal.links.twitter} onChange={(v) => updatePersonal({ links: { twitter: v } })} placeholder="X (Twitter) Link" />
                        <SocialInput icon={<Instagram size={16} />} value={portfolioData.personal.links.instagram} onChange={(v) => updatePersonal({ links: { instagram: v } })} placeholder="Instagram Link" />
                    </div>
                </div>
            </FormSection>

            {/* Skills */}
            <FormSection icon={<Code className="w-5 h-5 text-purple-500" />} title="Skills">
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && newSkill) {
                                addSkill(newSkill);
                                setNewSkill("");
                            }
                        }}
                        placeholder="Add a skill (e.g. Figma)"
                        className="flex-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2 text-zinc-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                    <button
                        onClick={() => { if (newSkill) { addSkill(newSkill); setNewSkill(""); } }}
                        className="bg-purple-600 text-white p-2 rounded-xl"
                    >
                        <Plus size={20} />
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 group">
                            <span className="text-sm font-medium">{skill}</span>
                            <button onClick={() => removeSkill(i)} className="text-zinc-400 hover:text-red-500">
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </FormSection>

            {/* Projects */}
            <FormSection icon={<Briefcase className="w-5 h-5 text-orange-500" />} title="Projects">
                <div className="space-y-6">
                    {portfolioData.projects.map((project) => (
                        <div key={project.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative group bg-white dark:bg-zinc-900 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                            <button
                                onClick={() => removeProject(project.id)}
                                className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={18} />
                            </button>
                            <div className="space-y-4">
                                <InputGroup
                                    label="Project Title"
                                    value={project.title}
                                    onChange={(v) => updateProject(project.id, { title: v })}
                                    placeholder="My Awesome App"
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputGroup
                                        label="GitHub Repository"
                                        value={project.github}
                                        onChange={(v) => updateProject(project.id, { github: v })}
                                        placeholder="https://github.com/..."
                                    />
                                    <InputGroup
                                        label="Live Link"
                                        value={project.liveLink}
                                        onChange={(v) => updateProject(project.id, { liveLink: v })}
                                        placeholder="https://..."
                                    />
                                </div>
                                <InputGroup
                                    label="Tech Stack (comma separated)"
                                    value={Array.isArray(project.tech) ? project.tech.join(", ") : project.tech || ""}
                                    onChange={(v) => updateProject(project.id, { tech: v.split(",").map(t => t.trim()).filter(t => t !== "") })}
                                    placeholder="React, Tailwind, Node.js"
                                />
                                <div>
                                    <label className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Description</label>
                                    <textarea
                                        value={project.description}
                                        onChange={(e) => updateProject(project.id, { description: e.target.value })}
                                        placeholder="What does it do?"
                                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all min-h-[80px]"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={() => addProject({ title: "New Project", description: "", tech: [], github: "", liveLink: "" })}
                        className="w-full py-4 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-center justify-center gap-2 text-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                    >
                        <Plus size={20} /> Add Project
                    </button>
                </div>
            </FormSection>
        </div>
    );
}

function FormSection({ icon, title, children }) {
    return (
        <div className="bg-white dark:bg-zinc-900/50 rounded-3xl p-6 md:p-8 border border-zinc-100 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="text-xl font-bold tracking-tight">{title}</h2>
            </div>
            {children}
        </div>
    );
}

function InputGroup({ label, value, onChange, placeholder, type = "text" }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
        </div>
    );
}

function SocialInput({ icon, value, onChange, placeholder }) {
    return (
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                {icon}
            </div>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
        </div>
    );
}
