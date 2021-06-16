import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const PaintBanner=()=> {
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
    
    <section className="productBanner paintBanner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
            <h2 className="heading mb-md-4">PAINT PROTECTION <br></br>FILM</h2>
            <p>A colourless and transparent physical protective film that covers the surface of automobile paint to avoid external damage. The film comes with good flexibility and does not affect the appearance of the original car paint after installation.</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-10 px-5">
            <img src="img/paintImg.png" className="img-fluid" />                  
          </div>
        </div>
      </div>
      <div ref={scrollDiv} className="tabSpace" id="tab"></div>
    </section>
  )
}

export default PaintBanner;
