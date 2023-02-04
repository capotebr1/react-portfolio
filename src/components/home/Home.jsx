import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import "./Home.scss";
import { motion } from 'framer-motion';
import cvpdf from "../../assets/CV Bruno Capote.pdf"
const Home = () => {
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);
    return (
        <motion.div className='home__container'
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
            <div className='home__header'>
                <h1>
                    <motion.p
                        animate={{
                            y: 15,
                        }}
                        transition={{ repeat: Infinity, 
                            repeatType: "reverse",
                            duration: 1,
                        ease: "linear" }}
                    >Hi!</motion.p>
                     i'm <span className='name orangeText'>Bruno Capote</span> 
                    <br/> Web Developer. 
                
                </h1>
                <h2> <span className='orangeText'>Trainee Fullstack Developer | Experienced using Javascript</span> </h2>
            </div>
            <motion.div className='home__menu'
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    y: 10
                }}
                transition={{
                    duration: 0.5,
                    delay: .5
                }}
            >
                <a href='mailto:brunocapotehdez@gmail.com'>
                    <button className='home__buttons'>
                        Contact me
                    </button>
                </a>
                <a href={cvpdf} target="_blank" rel='noopener noreferrer' download={"CV Bruno Capote.pdf"}>
                    <button className='home__buttons' >
                        Download CV
                    </button>
                </a>
            </motion.div>
        </motion.div>
    );
}

export default Home;
