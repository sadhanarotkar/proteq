import { useRouter } from "next/router";

export default function PaintBanner() {
  const router = useRouter();
  return (
    
    <section className="productBanner paintBanner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <h2 className="heading mb-md-4">PAINT PROTECTION <br></br>FILM</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br></br> industry. Lorem Ipsum has been the industry’s standard dummy<br></br> text ever since the 1500s, when an unknown printer</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 px-5">
            <img src="img/paintImg.png" className="img-fluid" />                  
          </div>
        </div>
      </div>
      <div className="tabSpace" id="tab"></div>
    </section>
  )
}
