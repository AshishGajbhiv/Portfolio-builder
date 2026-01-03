// Utility function to generate complete HTML/CSS code from portfolio data
export function generatePortfolioHTML(portfolioData, theme) {
    const { personal, skills, projects } = portfolioData;

    // Generate CSS based on theme
    const getThemeStyles = () => {
        switch (theme) {
            case 'dark':
                return {
                    body: 'background: #09090b; color: white; font-family: sans-serif;',
                    container: 'background: #09090b; color: white;',
                    projectCard: 'background: rgba(39, 39, 42, 0.5); border: 1px solid #3f3f46; padding: 1.5rem; border-radius: 1.5rem; margin-bottom: 2rem; transition: all 0.3s;',
                    projectCardHover: 'background: #27272a;',
                    projectTitle: 'color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;',
                    projectDescription: 'color: #d4d4d8; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem;',
                    skillTag: 'background: #3f3f46; color: #d4d4d8; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; display: inline-block; margin: 0.25rem;',
                    techTag: 'background: #3f3f46; color: #a1a1aa; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.625rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; margin: 0.25rem;',
                    link: 'color: #a1a1aa; font-size: 0.75rem; text-decoration: none; transition: color 0.3s;',
                    linkHover: 'color: #60a5fa;',
                    sectionTitle: 'color: #a1a1aa; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin-bottom: 1.5rem;',
                    name: 'font-size: 3rem; font-weight: 900; margin-bottom: 1rem;',
                    role: 'font-size: 1.25rem; font-weight: 500; color: #71717a;'
                };
            case 'creative':
                return {
                    body: 'background: #fdfcf0; color: #1a1a1a; font-family: serif;',
                    container: 'background: #fdfcf0; color: #1a1a1a;',
                    projectCard: 'background: white; border: 2px solid #1a1a1a; padding: 1.5rem; border-radius: 1.5rem; margin-bottom: 2rem; box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);',
                    projectCardHover: 'transform: translate(-2px, -2px); box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);',
                    projectTitle: 'color: #1a1a1a; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;',
                    projectDescription: 'color: #1a1a1a; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem; opacity: 0.7;',
                    skillTag: 'background: #fef3c7; color: #78350f; border: 1px solid #fde68a; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; display: inline-block; margin: 0.25rem;',
                    techTag: 'background: transparent; color: #71717a; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.625rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; margin: 0.25rem;',
                    link: 'color: #71717a; font-size: 0.75rem; text-decoration: none; transition: color 0.3s;',
                    linkHover: 'color: #2563eb;',
                    sectionTitle: 'color: #71717a; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin-bottom: 1.5rem;',
                    name: 'font-size: 3rem; font-weight: 900; margin-bottom: 1rem; font-style: italic; color: #4f46e5;',
                    role: 'font-size: 1.25rem; font-weight: 500; color: #ec4899;'
                };
            case 'glass':
                return {
                    body: 'background: linear-gradient(to bottom right, #eef2ff, #fce7f3); color: #312e81; font-family: sans-serif;',
                    container: 'background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.2); color: #312e81;',
                    projectCard: 'background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); padding: 1.5rem; border-radius: 1.5rem; margin-bottom: 2rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);',
                    projectCardHover: 'background: rgba(255, 255, 255, 0.4);',
                    projectTitle: 'color: #312e81; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;',
                    projectDescription: 'color: #312e81; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem; opacity: 0.7;',
                    skillTag: 'background: rgba(255, 255, 255, 0.4); border: 1px solid rgba(255, 255, 255, 0.6); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; display: inline-block; margin: 0.25rem;',
                    techTag: 'background: transparent; color: #71717a; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.625rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; margin: 0.25rem;',
                    link: 'color: #71717a; font-size: 0.75rem; text-decoration: none; transition: color 0.3s;',
                    linkHover: 'color: #2563eb;',
                    sectionTitle: 'color: #71717a; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin-bottom: 1.5rem;',
                    name: 'font-size: 3rem; font-weight: 900; margin-bottom: 1rem;',
                    role: 'font-size: 1.25rem; font-weight: 500; color: #71717a;'
                };
            case 'cyber':
                return {
                    body: 'background: #18181b; color: #22d3ee; font-family: monospace;',
                    container: 'background: #18181b; color: #22d3ee;',
                    projectCard: 'background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(6, 182, 212, 0.2); padding: 1.5rem; border-radius: 1.5rem; margin-bottom: 2rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);',
                    projectCardHover: 'border-color: rgba(6, 182, 212, 0.6);',
                    projectTitle: 'color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;',
                    projectDescription: 'color: #d4d4d8; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem; opacity: 0.7;',
                    skillTag: 'background: rgba(6, 182, 212, 0.1); color: #22d3ee; border: 1px solid rgba(6, 182, 212, 0.3); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; display: inline-block; margin: 0.25rem;',
                    techTag: 'background: transparent; color: #71717a; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.625rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; margin: 0.25rem;',
                    link: 'color: #71717a; font-size: 0.75rem; text-decoration: none; transition: color 0.3s;',
                    linkHover: 'color: #22d3ee;',
                    sectionTitle: 'color: #d946ef; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin-bottom: 1.5rem;',
                    name: 'font-size: 3rem; font-weight: 900; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em; background: linear-gradient(to right, #22d3ee, #d946ef); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;',
                    role: 'font-size: 1.25rem; font-weight: 500; color: #67e8f9;'
                };
            default: // minimal
                return {
                    body: 'background: white; color: #18181b; font-family: sans-serif;',
                    container: 'background: white; color: #18181b;',
                    projectCard: 'background: #fafafa; border: 1px solid transparent; padding: 1.5rem; border-radius: 1.5rem; margin-bottom: 2rem; transition: all 0.3s;',
                    projectCardHover: 'background: #f4f4f5; border-color: #e4e4e7;',
                    projectTitle: 'color: #18181b; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;',
                    projectDescription: 'color: #3f3f46; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem;',
                    skillTag: 'background: #f4f4f5; color: #52525b; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; display: inline-block; margin: 0.25rem;',
                    techTag: 'background: #e4e4e7; color: #52525b; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.625rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; margin: 0.25rem;',
                    link: 'color: #71717a; font-size: 0.75rem; text-decoration: none; transition: color 0.3s;',
                    linkHover: 'color: #2563eb;',
                    sectionTitle: 'color: #a1a1aa; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin-bottom: 1.5rem;',
                    name: 'font-size: 3rem; font-weight: 900; margin-bottom: 1rem;',
                    role: 'font-size: 1.25rem; font-weight: 500; color: #71717a;'
                };
        }
    };

    const styles = getThemeStyles();

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name || 'Portfolio'} - ${personal.role || 'Professional Portfolio'}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            ${styles.body}
            padding: 2rem;
            line-height: 1.6;
        }

        .container {
            ${styles.container}
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem;
            border-radius: 2.5rem;
            box-shadow: 0 32px 64px -16px rgba(0, 0, 0, 0.1);
        }

        .header {
            margin-bottom: 4rem;
        }

        .name {
            ${styles.name}
        }

        .role {
            ${styles.role}
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .social-links a {
            ${styles.link}
        }

        .social-links a:hover {
            ${styles.linkHover}
        }

        .section {
            margin-bottom: 4rem;
        }

        .section-title {
            ${styles.sectionTitle}
        }

        .bio {
            font-size: 1.125rem;
            line-height: 1.75;
            max-width: 42rem;
            opacity: 0.8;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .skill-tag {
            ${styles.skillTag}
        }

        .projects {
            display: grid;
            gap: 2rem;
        }

        .project-card {
            ${styles.projectCard}
        }

        .project-card:hover {
            ${styles.projectCardHover}
        }

        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .project-title {
            ${styles.projectTitle}
        }

        .project-links {
            display: flex;
            gap: 1rem;
            margin-top: 0.25rem;
        }

        .project-link {
            ${styles.link}
        }

        .project-link:hover {
            ${styles.linkHover}
        }

        .project-description {
            ${styles.projectDescription}
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tech-tag {
            ${styles.techTag}
        }

        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }

            .container {
                padding: 2rem;
            }

            .name {
                font-size: 2rem;
            }

            .role {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1 class="name">${personal.name || 'Your Name'}</h1>
            <p class="role">${personal.role || 'Your Role'}</p>
            <div class="social-links">
                ${personal.links.github ? `<a href="${personal.links.github}" target="_blank" title="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>` : ''}
                ${personal.links.linkedin ? `<a href="${personal.links.linkedin}" target="_blank" title="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>` : ''}
                ${personal.links.twitter ? `<a href="${personal.links.twitter}" target="_blank" title="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                </a>` : ''}
                ${personal.links.instagram ? `<a href="${personal.links.instagram}" target="_blank" title="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>` : ''}
            </div>
        </header>

        <!-- Bio -->
        <section class="section">
            <h2 class="section-title">About</h2>
            <p class="bio">${personal.bio || 'Write your bio to see it here...'}</p>
        </section>

        <!-- Skills -->
        <section class="section">
            <h2 class="section-title">Expertise</h2>
            <div class="skills">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </section>

        <!-- Projects -->
        <section class="section">
            <h2 class="section-title">Featured Work</h2>
            <div class="projects">
                ${projects.map(project => `
                    <div class="project-card">
                        <div class="project-header">
                            <div>
                                <h3 class="project-title">${project.title}</h3>
                                <div class="project-links">
                                    ${project.github ? `<a href="${project.github}" class="project-link" target="_blank">GitHub</a>` : ''}
                                    ${project.liveLink ? `<a href="${project.liveLink}" class="project-link" target="_blank">Live Demo</a>` : ''}
                                </div>
                            </div>
                        </div>
                        <p class="project-description">${project.description}</p>
                        <div class="tech-tags">
                            ${project.tech?.map(tech => `<span class="tech-tag">${tech}</span>`).join('') || ''}
                        </div>
                    </div>
        `).join('')}
            </div>
        </section>
    </div>
</body>
</html>`;

    return html;
}
