import React, {useState} from 'react';
import {Gallery} from "react-grid-gallery";
import s from "./Services.module.css"


const Services = () => {

    const IMAGES = [
        {
            src:
                "https://s3.ap-south-1.amazonaws.com/proyuga-media-assets/News/News-Page-Images/PAX/iBCricket-PAX1.jpg",
            thumbnail:
                "https://s3.ap-south-1.amazonaws.com/proyuga-media-assets/News/News-Page-Images/PAX/iBCricket-PAX1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            tags: [
                {value: "Text1", title: "Nature"},
                {value: "Text2", title: "Flora"},
            ],
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail:
                "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail:
                "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail:
                "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail:
                "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        }
    ];

    const [images, setImages] = useState(IMAGES);
    /*    const hasSelected = images.some((image) => image.isSelected);*/

    const handleSelect = (index) => {
        const nextImages = images.map((image, i) =>
            i === index ? {...image, isSelected: !image.isSelected} : image
        );
        setImages(nextImages);
    };

    /*    const handleSelectAllClick = () => {
            const nextImages = images.map((image) => ({
                ...image,
                isSelected: !hasSelected,
            }));
            setImages(nextImages);
        };*/

    return (
        <div className={s.galeryOverlay}>
            <div className={s.kitchen}>
                <h2>Кухні</h2>
                <Gallery
                    images={images}
                    onSelect={handleSelect}
                    tagStyle={{
                        display: "inline",
                        padding: ".2em .6em .3em",
                        fontSize: "75%",
                        fontWeight: "600",
                        lineHeight: "1",
                        color: "#7deab8",
                        background: "rgba(0,0,0,0.65)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        verticalAlign: "baseline",
                        borderRadius: ".25em"
                    }}
                    enableLightbox={true}
                    // maxRows={3}
                    backdropClosesModal
                    // currentImage={3}
                    // isOpen={ true}
                />
            </div>
            <div className={s.kitchen}>
                <h2>Шафи</h2>
                <Gallery
                    images={images}
                    onSelect={handleSelect}
                    tagStyle={{
                        display: "inline",
                        padding: ".2em .6em .3em",
                        fontSize: "75%",
                        fontWeight: "600",
                        lineHeight: "1",
                        color: "#7deab8",
                        background: "rgba(0,0,0,0.65)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        verticalAlign: "baseline",
                        borderRadius: ".25em"
                    }}
                    enableLightbox={true}
                    // maxRows={3}
                    backdropClosesModal
                    // currentImage={3}
                    // isOpen={ true}
                />
            </div>
        </div>
    );
};

export default Services;