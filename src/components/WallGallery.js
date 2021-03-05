import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';

let WallGallery = () => {
    let [images,  setImages] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(()=> {
        let dataURL = 'http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0';
        axios.get(dataURL).then((response)=> {
            setImages(response.data);

        }).catch((error)=> {
            setErrorMessage(error);

        });
    }, []);



    return(
        <React.Fragment>
            {
                images.map(img=>{
                                return (
                                        <div className="gallery">
                                            <div key={img.id} className="gallery" >
                                            <img  src={img.urls.regular} alt={img.alt_description}/>
                                            </div>
                                        </div>
                                        )
                                 })

            }

        </React.Fragment>
    )
};

export default WallGallery;