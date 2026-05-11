import './ProjectSection.css'
import { useEffect, useRef } from 'react';

function ProjectSection(){
    const containerRef = useRef(null);
    const hasAnimated = useRef(false);
    const lastScrollY = useRef(window.scrollY);
    const currentOffset = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                containerRef.current?.classList.add('visible');
                observer.disconnect();
            }
        }, { threshold: 0.2 });

        if (containerRef.current) observer.observe(containerRef.current);

        const handleScroll = () => {
            const deltaY = window.scrollY - lastScrollY.current;
            lastScrollY.current = window.scrollY;

            if (!hasAnimated.current) return;

            currentOffset.current = Math.max(-80, Math.min(80, currentOffset.current + deltaY * 0.15));
            if (containerRef.current)
                containerRef.current.style.transform = `translateY(${currentOffset.current}px)`;
        };
 
        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <section id="ProjectSection">
                <div className="innerProjectSectionContainer" ref={containerRef}>
                    <h2 className="ProjectIntro">Projects</h2>
                    <div className="ProjectContainer">
                        <h3 className="projectTitle"><a href="https://github.com/AlexL2545/portfolio-website" target="_blank" rel="noreferrer">Portfolio Website</a></h3>
                        <p className="projectSkills">JaveScript | HTML | CSS | React | Vite | Node.js </p>
                        <p className="projectText">This website. A React portfolio website built with Vite, using Three.js and Vanta.js.</p>
                    </div>
                    <div className="ProjectContainer">
                        <h3 className="projectTitle"><a href="https://github.com/AlexL2545/greeting-user" target="_blank" rel="noreferrer">Greeting User</a></h3>
                        <p className="projectSkills">Bash | Shell Script | Unix</p>
                        <p className="projectText"> A macOS compatible bash script that reads the current hour, displays a greeting based on time of day, and manages a simple name list(add/remove) in user_names.txt using date, grep, and sed.</p>
                    </div>
                    <div className="ProjectContainer">
                        <h3 className="projectTitle"><a href="https://gif-theater.netlify.app/" target="_blank" rel="noreferrer">GIF-Theater</a></h3>
                        <p className="projectSkills">HTML | CSS | JavaScript | Node.js | Giphy Api  </p>
                        <p className="projectText">Github link: <a href="https://github.com/AlexL2545/Gif-theater" target="_blank" rel="noreferrer">https://github.com/AlexL2545/Gif-theater</a>.</p>
                        <p className="projectText">A GIF search app that fetches GIFs from the Giphy API based on user input, cycles through results one at a time.</p>
                    </div>                       
                </div>
            </section>
        </>
    )
}

export default ProjectSection