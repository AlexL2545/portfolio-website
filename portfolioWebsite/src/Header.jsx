import './Header.css'
// imports icons
import {FaGithub, FaLinkedin} from 'react-icons/fa'

// This component is for the 'sticky' header 
function Header(){
    //  Sticky header layout
    return(
        <>
            <header className="innerHeaderContainer">
                <nav>
                    <div className="leftHeader">
                        <a href="https://github.com/AlexL2545" target="_blank" rel="noreferrer"> <FaGithub size={28}/>
                        </a>
                        <a href="https://www.linkedin.com/in/alex-leyva-1510b8150/" target="_blank" rel="noreferrer"> <FaLinkedin size={28}/>
                        </a>
                    </div>
                    <div className="middleHeader">
                        <a href="#Homepage">Homepage</a>
                    </div>
                    <div className="rightHeader">
                        <a href="#AboutMe">About Me</a>
                        <a href="#SkillsPage">Skills</a>
                        <a href="#ProjectSection">Project</a>
                        <a href="#Contact">Contact</a>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header