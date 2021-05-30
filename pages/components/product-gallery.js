import Link from 'next/link'
import { useRouter } from "next/router";

export default function ProductGallery() {
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/gallary1.png" data-sub-html="<h4>2.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                        <a href="">
                            <img className="img-fluid" src="img/gallary1.png" alt="Thumb-1" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/gallary2.png" data-sub-html="<h4>3.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                        <a href="">
                            <img className="img-fluid" src="img/gallary2.png" alt="Thumb-2"/>
                        </a>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary3.png" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                        <a href="">
                            <img className="img-fluid" src="img/gallary3.png" alt="Thumb-3"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary4.png" data-sub-html="<h4>M series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                  <a href="">
                      <img className="img-fluid verticalImg" src="img/gallary4.png" alt="Thumb-4"/>
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