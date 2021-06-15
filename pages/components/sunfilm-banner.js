import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const SunfilmBanner=()=> {
  const router = useRouter();
  const scrollDiv = useRef(null);

  const[is_tab,setIstab]=useState(false);

 useEffect(()=>{
  setIstab(router.query.value);
   console.log(router.query.value);
  if(is_tab){
  scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
   }

});
  return (
    
    <section className="productBanner windowBanner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-8 col-sm-12">
            <h2 className="heading mb-md-4">Window Films </h2>
            <p>Take protection on the road with you with our automotive products. Proteq's window films offer protection from the sun, flying debris, and road hazards. These protection films block 99% of the sun’s harmful UV rays, protecting your skin and reducing fading of interiors. You’ll stay cooler and your driving comfort will improve with the window film’s maximum heat rejection. Our window films collections eliminate the risk of overheating or burning the film, moulding or paint.</p>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-4 col-sm-10 px-5">
            <img src="img/window-bannerImg.png" className="img-fluid" />                  
          </div>
        </div>
      </div>
      <div ref={scrollDiv} className="tabSpace" id="tab"></div>
    </section>
  )
}

export default SunfilmBanner;
