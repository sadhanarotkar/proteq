import Head from 'next/head'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import PaintBanner from './components/paint-banner'
import PaintGallery from './components/paint-gallery'
import ProductFaq from './components/product-faq'
import ProductTestimonial from './components/product-testimonial'
import PaintTab from '../components/PaintTab'
import Link from 'next/link'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ContactUS from '../components/ContactUsCommon'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PaintRelatedProducts from '../components/PaintRelatedProducts'

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

const PaintSeries3 = ()=>{

  const pause=(e)=>{
    console.log(e);
    
    var myVideo = document.getElementById(e);
    myVideo.pause();
    
  };
  const play =(e)=>{
    var myVideo = document.getElementById(e);
    myVideo.play();
  };
  return (
    <main className="content">
      <Head>
        <title>Paint Protection Film</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      
      <Header />
        <div className="productWrapper">
          <PaintBanner />
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            <PaintTab series3='active'/>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-series3" role="tabpanel" aria-labelledby="nav-series3-tab">
                <div className="container-fluid">
                  <img src="img/3.0seriesText.svg" className="img-fluid my-md-5 productTextImg" />     
                  <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                      <div className="paintProductImgs">
                        <div className="lax productImg1">
                          <img src="img/Vertical-S3.png" className="img-fluid " />
                        </div>
                        <div className="lax productImg2">
                          <img src="img/Vertical-S3.png" className="img-fluid" />
                        </div>                         
                        <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                        <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-left px-sm-5">
                        <h2 className="heading mb-md-4">3.0 series</h2>  
                        <p>The 3.0 Paint Protection Film series comes in a Thermoplastic Polyurethane with 0.17mm ± 0.02mm thickness. It consists of three layers with 35% brightness. The size of the series complies with 1.52m x 15m and Patent Coating. Its performance has a heat repairment with 4 years warranty.</p>  
                        <button className="btn hvr-sweep-to-right mt-4" data-toggle="modal" data-target="#quoteModal">Get A Quote</button>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <div className="secproductVideo">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 productVideoLeft">
                    <h2 className="heading">Video</h2>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 productVideoRight">
                    <div className="lax productVideoRightImg"><img src="img/productVideo-bg.svg" className="img-fluid" /></div>
                  </div>
                </div>
                <div className="row justify-content-center productVideoWrapper">
                  <div className="col-xl-7 col-lg-7 col-md-7 col-sm-10 px-lg-0">
                    <div className="productVideo">
                      <img src="img/video7.png" className="img-fluid" />
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
                          <h4 className="heading">Keeps Your Car Looking New and Shiny</h4>
                          <p>PPF provides a permanent protective coat over your car’s paint, which helps you in keeping your car’s look new and shiny for a lot longer. It also prevents your car’s paint from fading and gives it a polished glossy appearance at all times.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Retains Your Car’s Resale Value</h4>
                          <p>Even if your car runs smoothly, poor appearance can significantly lower down its resale value. Paint protection is important to retain your car’s resale value as it protects your exterior from environmental and superficial damage.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Makes Car Cleaning Easier</h4>
                          <p>PPF repels dust, so your car’s exterior will not have a dust build-up problem. This makes the cleaning job a lot easier because often you can simply use a soft cloth to clean your car instead of using water every time.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Repels Environmental Damage</h4>
                          <p>Harmful UV rays of the sun can damage your car’s paint and make it look old too soon. Paint protection not only prevents your paint from UV rays, but also from scratches, rust, nicks, burns, etc.</p>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 text-center">
                    <div className="d-flex">
                      <div className="lax paintBenefitImg1"><img src="img/Vertical-S3.png" style={{ transform: 'rotate(5deg)'}} className="img-fluid" /></div>
                      <div className="lax paintBenefitImg2"><img src="img/Vertical-S3.png" style={{ transform: 'rotate(165deg)'}} className="img-fluid" /></div>               
                    </div>                 
                    <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                    <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>  
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PaintGallery />
          <ProductFaq />          
          <PaintRelatedProducts series2={true} series5={true} seriesm={true} />
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
                    <h2 className="heading">THE BEST CAR SERVICE AWAITS YOU</h2>
                    <p className="mb-4">Contact us today about your tyre or auto service & repair enquiries.</p>
                    <ContactUS/>
                  </div>
                </div>
              </div>
            </div>
            <img src="img/contact-bottomImg.svg" className="img-fluid contactBottomImg" />
          </section>
      </div>
      <Footer selected='paint protectio film' />   
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video7'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video7" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video7.mp4" type="video/mp4"/>
              </video> 
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default PaintSeries3;
