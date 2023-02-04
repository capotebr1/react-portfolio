import React, { useEffect, useState } from 'react';
import ProjectsList from './MyProjects';
import "./Projects.scss";
import { motion } from 'framer-motion';

const ProjectCard = ({title, description, images, techs}) => {
    const [imgCount, setImgCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let nextImg = (imgCount + 1) % images.length;
            setImgCount(nextImg);
        },3000);
        return () => clearInterval(interval)
    });

    return(
        <motion.div className='card-container'
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
                x: 30
            }}
            transition={{
                delay: .5,
                duration: 1
            }}
        >
            <img src={images[imgCount]} alt=""/>
            <div className='card-info'>
                <div className='info-header'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='info-footer'>
                    <h2><a href="https://github.com/capotebr1/e-comerce-JAP" target="_blank"><i class="fa-regular fa-eye"></i></a></h2>
                    <div>
                        {techs.map((tech,index) => <li key={index}>{tech}</li>)}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <motion.div className='project-container'
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
            }}
            transition={{
                duration: 1
            }}
        >
            <h1>Projects</h1>
            <div className='projects-cards'>
                {ProjectsList.map((project, index) => (
                    <ProjectCard 
                    title={project.projectTitle} 
                    description={project.description} 
                    images={project.images} 
                    techs={project.technologies}
                    key={index}
                    />
                    ))}
            </div>
            <p id='check-git'>Check my <span className='highlight'><a href="https://github.com/capotebr1" target="_blank">Github</a></span> to see more projects </p>
        </motion.div>
    );
}

export default Projects;
