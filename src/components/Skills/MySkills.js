import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Js from "../../assets/js.png";
import React from "../../assets/react.png";
import Node from "../../assets/node.png";
import Bootstrap from "../../assets/bootstrap.png";
import Sql from "../../assets/sql.png";
import Git from "../../assets/git.png";
import Vcs from "../../assets/vcs.png";

const SkillsCards = [
    {
        title: "Personal Skills",
        cards: [
            {
                cardTitle: "Quick Learner"
            },
            {
                cardTitle: "Sociable"
            },
            {
                cardTitle: "Agile Methodologies"
            },
            {
                cardTitle: "Intermediate B2 English Level"
            }   
        ]
    },
    {
        title: "FrontEnd",
        cards: [
            {
                cardTitle: "HTML5",
                imgSrc: Html
            },
            {
                cardTitle: "CSS3",
                imgSrc: Css
            },
            {
                cardTitle: "JavaScript ES6",
                imgSrc: Js
            },
            {
                cardTitle: "ReactJS",
                imgSrc: React
            },
            {
                cardTitle: "Bootstrap",
                imgSrc: Bootstrap
            }


        ]
    },
    {
        title: "BackEnd",
        cards: [
            {
                cardTitle: "NodeJS",
                imgSrc: Node
            },
            {
                cardTitle: "Express"
            },
            {
                cardTitle: "SQL",
                imgSrc: Sql
            }   
        ]
    },
    {
        title: "Software and Tools",
        cards: [
            {
                cardTitle: "Git and Github",
                imgSrc: Git
            },
            {
                cardTitle: "Visual Studio Code",
                imgSrc: Vcs
            },
        ]
    }
]

export default SkillsCards;