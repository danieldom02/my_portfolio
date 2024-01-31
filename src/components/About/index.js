import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

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
                        My name is Daniel Dominguez Arroyo and I am a recent graduate from the University 
                        of Texas at Austin. I am passionate about pursuing a career in software development,
                        especially after recieving a BS in Computer Science. With my degree and several projects 
                        under my belt, I am confident that I have a polished skill set as a software developer. 
                    </p>
                    <p>
                        I love to learn new technologies that help me further advance my career. I have 
                        worked with several languages such as, Java, C, JavaScript, SQL, Swift, etc. I am 
                        looking to work as a full-stack developer in order to keep a good understanding of 
                        both front-end and back-end development practices. Values that I seek in a work 
                        environment inlcude open communication, creative thinking, and collaboration.
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
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
        
    )
}

export default About