import './index.scss';
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut euismod purus, 
                    ornare ullamcorper nibh. Quisque vel lacus ut sapien accumsan semper id eleifend 
                    quam. Maecenas eleifend, justo id rhoncus porta, dolor felis vulputate risus, in 
                    consectetur elit sem vitae libero. Mauris eu vulputate nunc, vestibulum euismod 
                    risus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut euismod purus, 
                    ornare ullamcorper nibh. Quisque vel lacus ut sapien accumsan semper id eleifend 
                    quam. Maecenas eleifend, justo id rhoncus porta, dolor felis vulputate risus, in 
                    consectetur elit sem vitae libero. Mauris eu vulputate nunc, vestibulum euismod 
                    risus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut euismod purus, 
                    ornare ullamcorper nibh. Quisque vel lacus ut sapien accumsan semper id eleifend 
                    quam. Maecenas eleifend, justo id rhoncus porta, dolor felis vulputate risus, in 
                    consectetur elit sem vitae libero. Mauris eu vulputate nunc, vestibulum euismod 
                    risus.
                </p>
            </div>
        </div>
    )
}

export default About