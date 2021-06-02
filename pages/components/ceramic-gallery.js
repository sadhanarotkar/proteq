import Link from 'next/link'
import { useRouter } from "next/router";

export default function CeramicGallery() {
  const router = useRouter();
  return (
    <section className="secProductGallery">
      <div className="lax productGalleryRight"><img src="img/productGalleryRight.svg" className="img-fluid" /></div>
      <div className="container">
        <div id="lightgallery" className="row justify-content-center lightgallery">
          <div className="col-xl-9 col-lg-11">
            <h1 className="heading">Gallery</h1>
          </div>
            <div className="col-xl-6 col-lg-7 col-md-12 galleryLeft">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img1.jpeg">
                        <a href="">
                            <img className="img-fluid" src="img/galleryImgs/img1.jpeg" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img2.jpeg">
                        <a href="">
                            <img className="img-fluid" src="img/galleryImgs/img2.jpeg" alt="Thumb-2"/>
                        </a>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img4.jpeg">
                        <a href="">
                            <img className="img-fluid" src="img/galleryImgs/img4.jpg" alt="Thumb-3"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img6.jpeg">
                  <a href="">
                      <img className="img-fluid verticalImg" src="img/galleryImgs/img6.jpg" alt="Thumb-4"/>
                  </a>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <a href="gallery"><button className="btn hvr-sweep-to-right">View All <span></span></button></a>
                </div>
              </div>
            </div>
            
        </div>
      </div>
    </section>
  )
}
