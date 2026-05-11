import './AboutMe.css'
import { useEffect, useRef } from 'react';

function AboutMe() {
    const containerRef = useRef(null);
    const hasAnimated = useRef(false);
    const lastScrollY = useRef(window.scrollY);
    const currentOffset = useRef(0);

    useEffect(() => {
        // Entry: fade in when scrolled into view (only once)
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

    return (
        <>
            <section id="AboutMe">
                <div className="innerAboutMeContainer" ref={containerRef}>
                        <h2 className="intro">About Me</h2>
                        <p className="introText introTwo">Hello, I am Alex Leyva. A Computer Science graduate who is passionate about learning new technologies and continuously improving my skills.</p>
                        <p className="introText introThree">I am a self-driven learner with experience in front-end development and scripting. I enjoy building projects, solving problems, and expanding my knowledge as a developer and tester.</p>
                </div>
            </section>
        </>
    );
}

export default AboutMe;