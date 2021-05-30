import { useRouter } from "next/router";

export default function CeramicBanner() {
  const router = useRouter();
  return (
    <section className="productBanner ceramicBanner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
            <h2 className="heading mb-md-4">Ceramic</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer</p>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-10">
            <img src="img/homeProduct3.png" className="img-fluid mt-md-5 ceramicBannerImg" />
            <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
            <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>                  
          </div>
        </div>
      </div>
      <div className="tabSpace" id="tab"></div>
    </section>
  )
}
