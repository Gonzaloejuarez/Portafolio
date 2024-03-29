import React from "react";
import { SlideData } from "./Data";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {FaGithub} from 'react-icons/fa';
import './Slides.css';


export const Slide = () => {
    const prevButton = () => {
      var slider = document.getElementById("slider")
      slider.scrollLeft = slider.scrollLeft - 500
    }
  
    const nextButton = () => {
        var slider = document.getElementById("slider")
      slider.scrollLeft = slider.scrollLeft + 500
    }
return(
<div className="main-slider-container">
    <MdChevronLeft className="arrow left" onClick={prevButton}/>
    <div id="slider">
        {
            SlideData.map(({name, img, deploy, status, gitHub, info }) => (
                <div className="slider-card">
                    <div className="slider-card-image">
                        <img src={img} alt="" style={{width:"100%", height:"100%"}} />
                    </div>
                    <div className="slider-card-title">
                    <h1 className='slider-title'>{name}</h1>
                    <p className="slider-card-title-parrafo">{info}</p>
                    </div>
                    <div className="slider-buttons">
                        <a href={deploy} target='_blank' className="deploy" >
                            <p>Deploy</p>
                        </a>
                        <a href={gitHub} target='_blank' className='codigo' rel='noreferrer' >
                            <FaGithub color="black"   />
                            <p className="github">Codigo</p>
                        </a>
                        {/* <a href={deploy} target="_blank" rel="noopener noreferrer" className="deploy">
                            Deploy
                        </a> */}
                    </div>
                </div>
            ))
        }
    </div>
    <MdChevronRight className="arrow right" onClick={nextButton} />
</div>
)
}

export default Slide
