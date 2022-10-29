import React from 'react';
import style from './projects.module.css'
import cafe from '../../../../images/projects/cafe.png'
import dinner from '../../../../images/projects/dinner.png'
import bads from '../../../../images/projects/beds.png'
import ofice from '../../../../images/projects/ofice.png'
import {useNavigate} from "react-router-dom";

const Projects = () => {

    const navigate = useNavigate();

    const connectHandleClick = () => {
        navigate("/portfolio");
    }

    return (
        <div className={style.projectsOverlay}>
            <div className={style.projectsContainer}>
                <div className={style.header}>
                    <h2>РЕАЛІЗОВАНІ ПРОЕКТИ</h2>
                </div>
                <div className={style.projectsBlock}>
                    <div className={style.projectBlockItem}>
                        <img src={cafe} alt="Cafe"/>
                        <div className={style.text}>
                            <h2>BLUM CAFÉ ROOM</h2>
                            <p>Кафе, ресторан</p>
                        </div>
                    </div>
                    <div className={style.projectBlockItem}>
                        <img src={dinner} alt="Dinner room"/>
                        <div className={style.text}>
                            <h2>???</h2>
                            <p>???</p>
                        </div>
                    </div>
                    <div className={style.projectBlockItem}>
                        <img src={bads} alt="Loft"/>
                        <div className={style.text}>
                            <h2>FRIENDS HOSTEL LVIV</h2>
                            <p>Хостел у Львові</p>
                        </div>
                    </div>
                    <div className={style.projectBlockItem}>
                        <img src={ofice} alt="Ofice"/>
                        <div className={style.text}>
                            <h2>GRID DYNAMICS</h2>
                            <p>Офіс на 100 робочих місць</p>
                        </div>
                    </div>
                </div>
                <div className={style.lookingBlock}>
                    <div className={style.title}>
                        <p>Переглянути всі проекти</p>
                    </div>
                    <button onClick={connectHandleClick}>Переглянути</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;