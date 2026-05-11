import './SkillsPage.css'
import { useEffect, useRef } from 'react';


function SkillsPage(){
    const containerRef = useRef(null);
    const hasAnimated = useRef(false);
    const lastScrollY = useRef(window.scrollY);
    const currentOffset = useRef(0);
    // Entry: fade in when scrolled into view (only once)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                containerRef.current?.classList.add('visible');
                observer.disconnect();
            }
        }, { threshold: 0.2 });

        if (containerRef.current) observer.observe(containerRef.current);
        // Scroll parallax: moves up when scrolling down, down when scrolling up
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
            <section id="SkillsPage">
            <div className="innerSkillsPageContainer" ref={containerRef}>
                <h2 className="skillsIntro">Skills</h2>
                <div className="SkillsPageSection SkillsPageSectionOne">
                    <p className="skillListTitle skillListOne">Languages, Frameworks, and Technologies</p>
                    <div className="skillListContainer">
                        <ul className="skillList">
                            <li className="skillItem">Python</li>
                            <li className="skillItem">C/C++</li>
                            <li className="skillItem">Java</li>
                            <li className="skillItem">JavaScript</li>
                            <li className="skillItem">HTML</li>
                            <li className="skillItem">CSS</li>
                            <li className="skillItem">React</li>
                            <li className="skillItem">Node.js</li>
                            <li className="skillItem">REST APIs</li>
                        </ul>
                    </div>

                </div>
                <div className="SkillsPageSection SkillsPageSectionTwo">
                    <p className="skillListTitle skillListTwo">Development Tools and Practices</p>
                        <div className="skillListContainer">
                            <ul className="skillList">
                                <li className="skillItem">NPM</li>
                                <li className="skillItem">Webpack</li>
                                <li className="skillItem">Git</li>
                                <li className="skillItem">Github</li>
                                <li className="skillItem">VS Code</li>
                                <li className="skillItem">Linux</li>
                                <li className="skillItem">Shell Scripting</li>
                                <li className="skillItem">Test-Driven Development</li>
                                <li className="skillItem">Responsive Design</li>

                            </ul>
                        </div>
                </div>
            </div>
            </section>
        </>
    )
}


export default SkillsPage