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
        <div className="App">
            <div className="mydiv">
                <div className="gallery">
                {
                images.map(img=>{

                    return <img key={img.id} src={img.urls.regular} alt={img.alt_description} className="item"/>
                     })
                }
                </div>
            </div>

        </div>
    )
};

export default WallGallery;