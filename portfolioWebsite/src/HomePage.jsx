import './Homepage.css'
import{useEffect,useRef} from 'react';

// Intro component
function Homepage(){
    const textOneRef = useRef(null);
    const textTwoRef = useRef(null);
    const textThreeRef = useRef(null);

    useEffect(() => {
        const refs = [textOneRef, textTwoRef, textThreeRef];

            // Clear animation of texts after entry 
            refs.forEach(ref => {
                ref.current?.addEventListener('animationend', () => {
                    if (ref.current) ref.current.style.animation = 'none';
                });
            });
            // Shift texts based on scroll position
            const handleScroll = () => {
                const section = document.getElementById('Homepage');
                if (!section) return;
                const sectionHeight = section.offsetHeight;
                const progress = Math.min(window.scrollY / sectionHeight, 1);
                const shift = progress * 300;

                if (textOneRef.current)
                    textOneRef.current.style.transform = `translateX(-${shift}px)`;
                if (textTwoRef.current)
                    textTwoRef.current.style.transform = `translateY(-${shift}px)`;
                if (textThreeRef.current)
                    textThreeRef.current.style.transform = `translateX(${shift}px)`;
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <>
            <section id="Homepage">
                <div className="innerHomepageContainer">
                    <h2 className="homepageText homepageTextOne" ref={textOneRef}>Hello, I'm</h2>
                    <h1 className="homepageText homepageTextTwo" ref={textTwoRef}>Alex Leyva</h1>
                    <h2 className="homepageText homepageTextThree"ref={textThreeRef}>Programmer</h2>

                </div>
            </section>
        </>
    )
}

export default Homepage