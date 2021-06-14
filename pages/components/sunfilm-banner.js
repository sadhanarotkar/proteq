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
    
    <section className="productBanner paintBanner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <h2 className="heading mb-md-4">Sunfilm </h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 px-5">
            <img src="img/paintImg.png" className="img-fluid" />                  
          </div>
        </div>
      </div>
      <div ref={scrollDiv} className="tabSpace" id="tab"></div>
    </section>
  )
}

export default SunfilmBanner;
