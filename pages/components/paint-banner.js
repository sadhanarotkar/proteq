import { useRouter } from "next/router";

export default function PaintBanner() {
  const router = useRouter();
  return (
    
    <section className="productBanner paintBanner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <h2 className="heading mb-md-4">PAINT PROTECTION <br></br>FILM</h2>
            <p>A colourless and transparent physical protective film that covers the surface of automobile paint to avoid external damage. The film comes with good flexibility and does not affect the appearance of the original car paint after installation.</p>
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
