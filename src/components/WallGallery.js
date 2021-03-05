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
            <div className="container">
                        {
                            images.map(img=>{
                                return (
                                    <React.Fragment>
                                       <div className="container">
                                           <div className="row">
                                               <div className="col-md-3">
                                                   <img src={img.urls.small} alt=""/>
                                               </div>
                                           </div>
                                       </div>
                                    </React.Fragment>
                                )

                            })
                        }


            </div>

        </React.Fragment>
    )
};

export default WallGallery;