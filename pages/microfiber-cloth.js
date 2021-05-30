import Head from 'next/head'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import ProductGallery from './components/product-gallery'
import ProductFaq from './components/product-faq'
import ProductTestimonial from './components/product-testimonial'
import Link from 'next/link'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ContactUS from '../components/ContactUsCommon'

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

export default function MicrofiberCloth() {
  return (
    <main className="content">
      <Head>
        <title>Microfiber cloth</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Loader />
      <Header />
        <div className="productWrapper microWrapper">

          
          <section className="productBanner microBanner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <h2 className="heading mb-md-4">Microfiber cloth</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer</p>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-10 text-center">
                  <img src="img/homeProduct1.png" className="img-fluid" />                  
                </div>
              </div>
            </div>
          </section>
          <section className="secCategory">
            <div className="container-fluid">
              <img src="img/microfiberText.svg" className="img-fluid my-md-5 productTextImg" />
              <div className="row justify-content-center align-items-center">
                <img src="img/ceramicProduct-bg.png" className="ceramicProductImg microProductImg" />
                <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                  <img src="img/homeProduct3.png" className="img-fluid productImg" />
                  <div className="lax ceramicProductBall1"><img src="img/aboutIcon3.png" className="img-fluid" /></div>  
                  <div className="lax ceramicProductBall2"><img src="img/aboutIcon2.png" className="img-fluid" /></div>  
                  <div className="lax ceramicProductBall3"><img src="img/aboutIcon1.png" className="img-fluid" /></div>  
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-left px-sm-5">
                  <h2 className="heading mb-md-4">Microfiber cloth</h2>  
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an </p>  
                  <button className="btn hvr-fade mt-4">Get A Quote</button>
                </div>
              </div>     
              
            </div> 
            <div className="secproductVideo">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-4 productVideoLeft">
                    <h2 className="heading">Video</h2>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-8 productVideoRight"></div>
                </div>
                <div className="row justify-content-center productVideoWrapper">
                  <div className="col-xl-7 col-lg-7 col-md-6">
                    <div className="productVideo">
                      <img src="img/galleryBanner.png" className="img-fluid" />
                      <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="secBenefit">
            <div className="secBenefitInner">
              <div className="container-fluid">
                <img src="img/benifitText.svg" className="img-fluid benefitText" />
                <div className="benefitProduct d-md-none">
                  <img src="img/CS.png" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="benefitProduct">
              <div className="container-fluid">          
                <img src="img/benifitText.svg" className="img-fluid benefitText" />    
                <div className="row justify-content-end align-items-center">
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                    <OwlCarousel className='owl-theme' loop margin={10} nav items={1} dots={false} autoplay={true}>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Lorem Ipsum is simply dummy text</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Lorem Ipsum is simply dummy text</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Lorem Ipsum is simply dummy text</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 text-center">
                    <img src="img/CS.png" className="img-fluid" />                    
                    <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                    <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>  
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ProductGallery />
          <ProductFaq />          
          <ProductTestimonial />
          <section className="secHomeContact">
            <div className="homeContactLeft">
              <img src="img/contact-leftImg.png" className="img-fluid" />
              <div className="lax homeCeramic5"><img src="img/aboutIcon4.png" className="img-fluid" /></div>
              <div className="lax homeCeramic4"><img src="img/aboutIcon5.png" className="img-fluid" /></div>
              <div className="lax homeCeramic3"><img src="img/aboutIcon2.png" className="img-fluid" /></div>
            </div>
            <div className="container">
              <div className="row justify-content-end align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-7">
                  
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="homeForm">
                      <h1 className="heading">Contact Us</h1>
                      <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                      <ContactUS/>
                    </div>
                  </div>
              </div>
            </div>
            <img src="img/contact-bottomImg.svg" className="img-fluid contactBottomImg" />
          </section>
      </div>
      <Footer />      
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yAoLSRbwxL8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}