import React from 'react';
import style from './projects.module.css'
import cafe from '../../../../images/projects/cafe.png'
import dinner from '../../../../images/projects/dinner.png'
import bads from '../../../../images/projects/beds.png'
import ofice from '../../../../images/projects/ofice.png'
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Projects = () => {

    const navigate = useNavigate();
    const {t} = useTranslation()

    const connectHandleClick = () => {
        navigate("/portfolio");
    }
    const onCafeClick = () => {
        navigate("/blum");
    }
    const onDinnerClick = () => {
        navigate("/office");
    }
    const onHostelClick = () => {
        navigate("/hostel");
    }
    const onGridClick = () => {
        navigate("/gridDynamics");
    }

    return (
        <div className={style.projectsOverlay}>
            <div className={style.projectsContainer}>
                <div className={style.header}>
                    <h2>{t("mainProjects.header")}</h2>
                </div>
                <div className={style.projectsBlock}>
                        <div className={style.projectBlockItem} onClick={onCafeClick}>
                            <img src={cafe} alt="Cafe"/>
                            <div className={style.text}>
                                <h2>BLUM CAFÉ ROOM</h2>
                                <p>{t("mainProjects.blum.description")}</p>
                            </div>
                        </div>
                    <div className={style.projectBlockItem} onClick={onDinnerClick}>
                        <img src={dinner} alt="Dinner room"/>
                        <div className={style.text}>
                            <h2>{t("mainProjects.designStudio.title")}</h2>
                            <p>{t("mainProjects.designStudio.description")}</p>
                        </div>
                    </div>
                    <div className={style.projectBlockItem} onClick={onHostelClick}>
                        <img src={bads} alt="Loft"/>
                        <div className={style.text}>
                            <h2>FRIENDS HOSTEL LVIV</h2>
                            <p>{t("mainProjects.friendsHostel.description")}</p>
                        </div>
                    </div>
                    <div className={style.projectBlockItem} onClick={onGridClick}>
                        <img src={ofice} alt="Ofice"/>
                        <div className={style.text}>
                            <h2>GRID DYNAMICS</h2>
                            <p>{t("mainProjects.gridDynamics.description")}</p>
                        </div>
                    </div>
                </div>
                <div className={style.lookingBlock}>
                    <div className={style.title}>
                        <p>{t("mainProjects.allProjects")}</p>
                    </div>
                    <button onClick={connectHandleClick}>{t("mainProjects.review")}</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;