import React, {useState} from 'react';
import s from './Accordion.module.css'
import bgimage from "../../images/Backgrounds/Background3.PNG"

const accordionData = [
    {
        heading: "Які виникають питання?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Atque culpa dolorum exercitationem totam! Beatae nam numquam quos saepe ullam voluptatem?",
    },
    {
        heading: "Які виникають питання?",
        content:
            "Quos quam ipsam consequatur consequatur et distinctio. " +
            "Facere vel ut dolorem. Quam quo neque quos.",
    },
    {
        heading: "Які виникають питання?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Atque culpa dolorum exercitationem totam! Beatae nam numquam quos saepe ullam voluptatem?",
    },
    {
        heading: "Які виникають питання?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Atque culpa dolorum exercitationem totam! Beatae nam numquam quos saepe ullam voluptatem?",
    },
    {
        heading: "Які виникають питання?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Atque culpa dolorum exercitationem totam! Beatae nam numquam quos saepe ullam voluptatem?",
    },
    {
        heading: "Які виникають питання?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Atque culpa dolorum exercitationem totam! Beatae nam numquam quos saepe ullam voluptatem?",
    },
];

const Accordion = ({heading, content}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <li className={s.accordion_item}>
            <div className={s.accordion_toggle}
                 onClick={() => setIsActive(!isActive)}>
                <h3>{heading}</h3><span>{isActive ? "-" : "+"}</span>
            </div>
            <div className={s.contentOverlay}>
                {isActive &&
                    <div className={s.accordion_content}>{content}</div>}
            </div>
        </li>
    );
};


const Accord = () => {
    return (
        <div className={s.overlay}>
            <ul className={s.accordion}>
                {accordionData.map(({heading, content, index }) => (
                    <Accordion heading={heading}
                               content={content}
                               key={index}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Accord;

