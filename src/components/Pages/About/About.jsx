import React, {useEffect} from 'react';
import style from "./About.module.css";
import Header_img from "../../../images/About/Header_image.png";
import Work from "../../../images/About/CB4A1425 1.png"
import {useLocation} from "react-router-dom";

const About = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={style.about}>
            <div className={style.mainOverlay}>
                <img src={Header_img} alt="Main"/>
                <h2>ПРО НАС</h2>
            </div>
            <div className={style.statistic}>
                <div className={style.statisticItem}>
                    <h3>350</h3>
                    <p>задоволених клієнтів за 2,5 років</p>
                </div>
                <div className={style.statisticItem}>
                    <h3>20%</h3>
                    <p>наших клієнтів повертаються до нас із новими замовленнями.</p>
                </div>
                <div className={style.statisticItem}>
                    <h3>50%</h3>
                    <p>клієнтів приходять до нас завдяки рекомендаціям </p>
                </div>
            </div>
            <div className={style.mission}>
                <div className={style.titleBlock}>
                    <h3>НАША МІСІЯ ТА ЦІННОСТІ</h3>
                </div>
                <div className={style.textBlock}>
                    <div className={style.textBlockOverlay}>
                        <p>Ми створюємо зручні, атмосферні меблі,
                            які відповідають індивідуальному стилю,
                            залучаючи до роботи людей із вразливих груп населення.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.aboutCard}>
                <div className={style.card}>
                    <h2>1</h2>
                    <div className={style.textBlock}>
                        <h3>
                            Творимо разом
                        </h3>
                        <p>
                            У нас злагоджена команда, яка працює разом із клієнтом,
                            тому кожен відчуває свій внесок у кінцевий продукт
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <h2>2</h2>
                    <div className={style.textBlock}>
                        <h3>
                            Беремо відповідальність
                        </h3>
                        <p>
                            Відповідальність перед собою, клієнтом та суспільством
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <h2>3</h2>
                    <div className={style.textBlock}>
                        <h3>
                            Допомагаємо спільно
                        </h3>
                        <p>
                            Ми віддаємо частину своїх ресурсів (прибуток, час, продукцію) на розвиток спільнот
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <h2>4</h2>
                    <div className={style.textBlock}>
                        <h3>
                            Екологічність та безпека
                        </h3>
                        <p>
                            Ми використовуємо лише безпечний лак та клей, що не містить шкідливих хімікатів
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.story}>
                <div className={style.storyImage}>
                    <img src={Work} alt="Working man"/>
                </div>
                <div className={style.storyText}>
                    <p>
                        Майстерня WoodLuck засновувалася як соціальне підприємництво,
                        тож наша соціальна складова є частиною нашого ДНК. 10% від прибутку
                        скеровуємо для сімей, які перебувають у скруті.
                    </p>
                    <p>
                        Від самого початку роботи майстерні ми працевлаштовуємо чоловіків,
                        які пройшли реабілітацію від алко- та наркозалежності в реабілітаційних центрах “Добро”,
                        “Step by step”, “Кроки”, що у Львові, а також тих, які повернулися з АТО
                    </p>
                </div>
            </div>
            <div className={style.banner1}>
                <div className={style.text1}>
                    Фінансово і матеріально підтримуємо соціальну програму БО Львівська освітня фундація
                    “Добрий сусід”.
                </div>
                <div className={style.text2}>
                    Програма спрямована на допомогу родинам в скрутному становищі, а також
                    на активізацію громад на мікрорівнях.
                </div>
            </div>
            <div className={style.banner2}>
                <h4>
                    Для підтримки програми ми перераховуємо 10% з чистого доходу майстерні.
                </h4>
            </div>
        </div>
    );
};

export default About;