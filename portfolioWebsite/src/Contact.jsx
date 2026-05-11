import './Contact.css'
import { useEffect, useRef } from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Contact(){
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

    // layout for the contact section
    return(
        <>
            <section id="Contact">
                <div className="innerContactContainer" ref={containerRef}>
                    <h2 className="contactInfoText">Contact Info</h2>
                    <p className="ContactText">Email: alexleyva350@gmail.com</p>                    
                    <div className="contactIconRowContainer">
                        <a href="https://github.com/AlexL2545" target="_blank" rel="noreferrer"><FaGithub size={40}/></a>
                        <a href="https://www.linkedin.com/in/alex-leyva-1510b8150/" target="_blank" rel="noreferrer"><FaLinkedin size={40}/></a>
                    </div>                                     
                    <a className="resumeLink" href="https://docs.google.com/document/d/1-47_f8GYK36S3GIpaV0OwuOGEKx_jQkgyybk2gncTrc/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                </div>
            </section>
        </>
    )
}

export default Contact