import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const CeramicBanner=()=> {
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
    <section className="productBanner ceramicBanner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
            <h2 className="heading mb-md-4">Ceramic</h2>
            <p>Giving out a permanent or semi-permanent bond with a vehicle’s paint, which would not wash away or break down and does not require repeated application every few months. The coating will only add protection to your car’s exterior giving it a brand new look with comparatively minimal maintenance.</p>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-10">
            <img src="img/homeProduct3.png" className="img-fluid mt-md-5 ceramicBannerImg" />
            <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
            <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>                  
          </div>
        </div>
      </div>
      <div ref={scrollDiv} className="tabSpace" id="tab"></div>
    </section>
  )
}

export default CeramicBanner;
