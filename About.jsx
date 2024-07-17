import React, {useRef} from 'react'
import './About.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import img_2 from '../../assets/img_2.png'
import img_3 from '../../assets/img_3.png'
import img_4 from '../../assets/img_4.png'
import img_5 from '../../assets/img_5.png'
import img_6 from '../../assets/img_6.png'
import img_7 from '../../assets/img_7.png'
import img_8 from '../../assets/img_8.png'
import img_9 from '../../assets/img_9.png'
import cat from '../../assets/cat.png'



const About = () => {


  let scrollContainer = document.querySelector(".about-left")
  let backBtn = document.getElementById("backBtn")
  let nextBtn = document.getElementById("nextBtn")

  nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 330;
  });
  backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 330;
  });
  
  return (
    <div className="about">
      <div className='about-me-left'>

        <h1 className='header'>Who Am I?</h1>
        <p>HI! my name is Juniper Brinegar. I am a freshman in the Magnet STEM program at Montgomery Blair High School.
I'm interested in things ranging from <span className='pop1'> computer science</span> to <span className='pop1'> web design</span> to <span className='pop1'> engineering</span>. Outside of STEM,
I am very passionate about playing the clarinet, and I am in my local youth orchestra. I am also interested in jazz on the tenor saxophone.
I LOVE all things baking and <span className='pop'> matcha</span>!
        </p>
      </div>

    <div className="about-wrap">
      <img src={back_icon} alt="" id="backBtn"/>
      <div className='about-left'>
        <div>
          <span><img src={img_2} alt="" /></span>
          <span><img src={img_3} alt="" /></span>
          <span><img src={img_9} alt="" /></span>
        </div>
        <div>
          <span><img src={img_5} alt="" /></span>
          <span><img src={cat} alt="" /></span>
          <span><img src={img_8} alt="" /></span>
        </div>
      
      </div>
      <img src={next_icon} alt="" id="nextBtn"/>

    </div>
  </div>
  )
}

export default About


/*<div className='about-me-left'>

<h1 className='header'>Who Am I?</h1>
<p>HI! my name is Juniper Brinegar. I am a freshman in the Magnet STEM program at Montgomery Blair High School.
I'm interested in things ranging from computer science to web development to engineering. Outside of STEM,
I am very passionate about playing the clarinet, and I am in my local youth orchestra. I am also interested in jazz on the tenor saxophone.
I LOVE all things baking and matcha!
 </p>
</div>*/