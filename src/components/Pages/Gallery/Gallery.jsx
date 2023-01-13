import React, {useState} from 'react';
import s from './Gallery.module.css'
import img1 from '../../../images/Portfolio/blackTable.png'
import img2 from '../../../images/Portfolio/redTable.png'
import img3 from '../../../images/Portfolio/ofice.png'
import img4 from '../../../images/furnitures/stel.png'
import img5 from '../../../images/furnitures/bath.png'
import img6 from '../../../images/furnitures/decor.png'
import img7 from '../../../images/carousel_images/photo_2022-12-01 18.10.42.jpeg'


const GalleryOverlay = () => {

    let data = [
        {
            id: 1,
            imgSrc: img1
        },
        {
            id: 2,
            imgSrc: img2
        },
        {
            id: 3,
            imgSrc: img3
        },
        {
            id: 4,
            imgSrc: img4
        },
        {
            id: 5,
            imgSrc: img5
        },
        {
            id: 6,
            imgSrc: img6
        },
        {
            id: 7,
            imgSrc: img7
        }
    ]

    const [modalImg, setModalImg] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const getImage = (img) => {
        setTempImg(img);
        setModalImg(true);
    }

    return (
        <>
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
                             onClick={() => getImage(item.imgSrc)}
                        >
                            <img src={item.imgSrc} alt="pictire"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default GalleryOverlay