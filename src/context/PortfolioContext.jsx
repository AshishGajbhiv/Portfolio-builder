import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

const initialData = {
    personal: {
        name: 'Alex Johnson',
        role: 'Full Stack Developer',
        email: 'alex.j@example.com',
        bio: 'Passionate student developer building cool things on the web.',
        links: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            twitter: '',
            instagram: '',
        }
    },
    skills: ['React', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
    projects: [
        {
            id: 1,
            title: 'TaskMaster',
            description: 'A productivity app for students.',
            tech: ['React', 'Context API'],
            github: '#',
            liveLink: '#'
        },
        {
            id: 2,
            title: 'EcoTrack',
            description: 'Sustainability tracking dashboard.',
            tech: ['Next.js', 'Tailwind'],
            github: '#',
            liveLink: '#'
        }
    ]
};

export const PortfolioProvider = ({ children }) => {
    const [portfolioData, setPortfolioData] = useState(initialData);
    const [theme, setTheme] = useState('minimal'); // minimal, dark, creative, glass, cyber
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('isDarkMode');
        return saved !== null ? JSON.parse(saved) : true;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const updatePersonal = (data) => {
        setPortfolioData(prev => ({
            ...prev,
            personal: {
                ...prev.personal,
                ...data,
                links: data.links ? { ...prev.personal.links, ...data.links } : prev.personal.links
            }
        }));
    };

    const addSkill = (skill) => {
        setPortfolioData(prev => ({
            ...prev,
            skills: [...prev.skills, skill]
        }));
    };

    const removeSkill = (index) => {
        setPortfolioData(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    const addProject = (project) => {
        setPortfolioData(prev => ({
            ...prev,
            projects: [...prev.projects, { ...project, id: Date.now() }]
        }));
    };

    const updateProject = (id, updatedProject) => {
        setPortfolioData(prev => ({
            ...prev,
            projects: prev.projects.map(p => p.id === id ? { ...p, ...updatedProject } : p)
        }));
    };

    const removeProject = (id) => {
        setPortfolioData(prev => ({
            ...prev,
            projects: prev.projects.filter(p => p.id !== id)
        }));
    };

    return (
        <PortfolioContext.Provider value={{
            portfolioData,
            theme,
            setTheme,
            isDarkMode,
            setIsDarkMode,
            updatePersonal,
            addSkill,
            removeSkill,
            addProject,
            updateProject,
            removeProject
        }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) throw new Error('usePortfolio must be used within a PortfolioProvider');
    return context;
};
