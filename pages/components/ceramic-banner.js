import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const CeramicBanner=(props)=> {

  const ceramic ="Giving out a permanent bond with a vehicle’s paint, which would not wash away or break down and does not require repeated application every few months. The coating will only add protection to your car’s exterior giving it a brand new look with comparatively minimal maintenance.";
  const leather ="Proteq’s Leather Ceramic Shield is a Flexible Ceramic Coating for Genuine & Synthetic Leather Surfaces. It’s High Durability & Hydrophobicity Is The Most Advanced Feature for Your Car’s Interiors! Proteq's Leather Ceramic Shield Is a Clear, Ceramic Nano-Coating That Protects Your Leather Upholstery in your homes & in your car from Wear and Tear Colour Fading, Stains & Spills, and UV Rays While Repelling Water, Dirt and Other Contaminants.";  
  const plastic ="Plastic Ceramic is a unique coating for plastic surfaces suitable for both interior and exterior use. Plastic surfaces coated with Ceramic Plastic will feature a super hydrophobic effect with excellent wear resistance. The coating will add a moderate sheen to the surface making it a great permanent finish for both exterior and interior plastics no matter if they are new or need restoration.";
  const glass="Automotive enthusiasts tend to place most of their focus on protecting their car’s paint and keeping their tires clean, but what about the windshields and windows? Don’t they deserve the same amount of love and attention? A growing trend in the automotive culture is applying a ceramic coating on glass – including windshields and rear windows.";
  
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
            <p>{props.ceramic && ceramic}</p>
            <p>{props.leather && leather}</p>
            <p>{props.plastic && plastic}</p>
            <p>{props.glass && glass}</p>


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
