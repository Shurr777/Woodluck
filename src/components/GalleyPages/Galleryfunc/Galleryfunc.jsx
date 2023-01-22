import React, {useState} from 'react';
import s from "./Galleyfunc.module.css";

const Galleryfunc = ({data}) => {

    const [modalImg, setModalImg] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const getImage = (img) => {
        setTempImg(img);
        setModalImg(true);
    }

    return (
        <div>
            <div className={modalImg ? `${s.modal} ${s.open}` : s.modal}>
                <img src={tempImg} alt="temp"/>
                <button onClick={() => setModalImg(false)}>
                    &#10006;
                </button>
            </div>
            <div className={s.overlay}>
                {data.map((item, index) => {
                    return (
                        <div className={s.pics}
                             key={index}
                             onClick={() => getImage(item.imgSrc)}>
                            <img src={item.imgSrc} alt="pictire"/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Galleryfunc;