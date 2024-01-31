import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faReact, faSwift } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import MyPicture from '../../assets/images/about_me.png';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        My name is Daniel Dominguez Arroyo, I am a recent graduate from the University 
                        of Texas at Austin and I am passionate about pursuing a career in software development. 
                        With a degree in Computer Science and several projects under my belt, I am confident that I 
                        have developed a polished skill set as a software developer. 
                    </p>
                    <p>
                        I love to learn new technologies that help me further advance my career. I have 
                        worked with several languages such as, Java, C, JavaScript, SQL, and Swift. I am 
                        interested in the entire scope of the software development process which drives me to 
                        look for positions that offer a full-stack development role. Furthermore, values that I seek 
                        in a work environment inlcude open communication, creative thinking, and collaboration.
                    </p>
                    <p>
                        In my free time I like to go out and play basketball with some of my closest friends.
                        I also enjoy going out and trying new restauraunts around the city, especially if I 
                        get to do so with family or friends. Some other things that I enjoy include anime, fashion,
                        and traveling.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <img src={MyPicture} alt="D" width="295" height="295" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faJava} color="#5382A1" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faPython} color="#306998" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faDatabase} color="#402770" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faSwift} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
        
    )
}

export default About