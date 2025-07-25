import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials </span>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{color: "var(--orange)"}}>{testimonialsData[selected].name}</span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
            <img 
            onClick={()=>{
              selected===0?setSelected(tLength-1):
              setSelected((prev)=> prev-1)
            }}
            
            
            src={leftArrow} alt="" />
            <img 
             onClick={()=>{
              selected===tLength-1?  setSelected(0):
              setSelected((prev)=> prev+1)
            }}
            
            
            src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
