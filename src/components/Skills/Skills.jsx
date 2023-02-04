import React from 'react';
import "./Skills.scss";
import SkillsCards from './MySkills';
import { motion } from 'framer-motion';

const SkillsList = ({cards}) => {
    return(
        cards.map((card,index) => (
            <motion.div className='card' key={index}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    x: 20
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: .3
                }}
            >
                {card.imgSrc ? <img src={card.imgSrc} alt={card.cardTitle} /> : ""} 
                <h3 className='card-title'>{card.cardTitle}</h3>

            </motion.div>
        ))
    );
}

const Skills = () => {
    return (
        <div className='skills-container'>
            <motion.h1
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }}
            >
                SKILLS
            </motion.h1>
            <div className='skills'>
                {SkillsCards.map((skill,index) => (
                    <div className='skill-card' key={index}>
                        <motion.h2
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                            }}
                        >
                            {skill.title}
                        </motion.h2>
                        <div className='sub-cards'>
                            <SkillsList cards={skill.cards}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
