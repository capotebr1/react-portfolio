import React from 'react';
import "./About.scss";
import { motion } from 'framer-motion';
import Studies from './studies.js';

const StudyCard = ({name, place}) => {
    return(
        <motion.div className='study-card'
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1
        }}
        transition={{
            duration: 1,
            delay: .5
        }}
        >
            <h2>{name}</h2>
            <h3>{place}</h3>
            <div className='bg-template'>

            </div>
        </motion.div>
    )
}

const About = () => {
    return (
        <motion.div className='about-container'
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                y: 80
            }}
            transition={{
                duration: 1
            }}
        >
            <div className='about-me'>
                <h1>About me</h1>
                <div>
                    <p>
                        I am a <span className='highlight' >Computer Engineering</span>  and <span className='highlight' >Web Development student</span> who 
                        is constantly learning the latest technologies in order to implement better solutions. 
                    </p>  
                    <br />
                    <p>
                        I specialize in <span className="highlight">Front-End Development</span>. However i'm studying Backend tools
                        like MERN Stack and Java.
                    </p>  
                    <br />
                    <p>
                        i'm looking for a job opportunity that allow me to test and develop my knowledge by helping the team.
                    </p>  
                    <br />
                    <p>
                        Interests:
                        <ul>
                            <li >Rock Lover ⚡🎵</li>
                            <li >I love watching movies, specifically directed by Quentin Tarantino 😎🎥 </li>
                            <li >I'm a Tech Geek 🧑‍💻 </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='about-studies'>
                <h1>Studies</h1>
                <div className='studies'>
                    {Studies.map((study , index) => (
                        <StudyCard
                            name={study.name}
                            place={study.place} 
                            imgSrc={study.imgSrc}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default About;
