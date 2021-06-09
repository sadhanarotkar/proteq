import Head from 'next/head'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import CeramicGallery from './components/ceramic-gallery'
import ProductTestimonial from './components/product-testimonial'
import CeramicTab from '../components/CeramicTab'
import Link from 'next/link'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ContactUS from '../components/ContactUsCommon'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RelatedProducts from '../components/RelatedProducts'
import CeramicBanner from './components/ceramic-banner'

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

const PlasticCeramic = ()=>{
  
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
        <title>Ceramic</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Header />
        <div className="productWrapper">
          <CeramicBanner/>
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            <CeramicTab plastic='active'/>  
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-series5" role="tabpanel" aria-labelledby="nav-series5-tab">
                <div className="container-fluid">
                  <img src="img/plastic-ceramic-text.svg" className="img-fluid my-md-5 productTextImg" />    
                  <div className="row justify-content-center align-items-center">
                    <img src="img/ceramicProduct-bg.png" className="ceramicProductImg" />
                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                      <img src="img/Plastic-ceramic.png" className="img-fluid productImg" />
                      <div className="lax ceramicProductBall1"><img src="img/aboutIcon3.png" className="img-fluid" /></div>  
                      <div className="lax ceramicProductBall2"><img src="img/aboutIcon2.png" className="img-fluid" /></div>  
                      <div className="lax ceramicProductBall3"><img src="img/aboutIcon1.png" className="img-fluid" /></div>  
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-left px-sm-5">
                      <h2 className="heading mb-md-4">Plastic ceramic</h2>  
                      <p>Plastic products, due to their durability, safety, and low manufacturing cost, are now rapidly replacing cookware items traditionally made of glass and ceramics. Despite this trend, some still prefer relatively expensive and more fragile ceramic/glassware because plastics can deteriorate over time after exposure to foods, which can generate odours, bad appearance, and/or colour change. Nano-ceramic coatings can eliminate these drawbacks while still retaining the advantages of the plastic since the coating only alters the surface of the plastic. </p>  
                      <p>The surface coating adds functionality to the plastics such as self-cleaning and disinfectant capabilities that result from a photocatalytic effect of certain ceramic systems. These ceramic coatings can also provide non-stick surfaces and higher temperature capabilities for the base plastics without resorting to ceramic or glass materials.</p>
                      <button className="btn hvr-fade mt-4" data-toggle="modal" data-target="#quoteModal">Get A Quote</button>
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
                      <img src="img/video4.png" className="img-fluid" />
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
                          <h4 className="heading">Superior quality</h4>
                          <p>Ceramic injection moulding employs dependable equipment and advanced ceramic materials and compounds to produce ceramic components in a carefully controlled environment. </p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Product consistency</h4>
                          <p>Specialists in ceramic injection moulding handle this process with extreme caution, care, and attention to detail. They follow a strict set of standards and client specifications while also employing quality assurance checks and inspections throughout the entire production process.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Application versatility</h4>
                          <p>Ceramic products are versatile and have numerous advantages over other types of materials, which is why they are widely used across different industries. For instance, ceramic moulded parts can be used as dental implants, electrical insulators, regulators, bearings, etc.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Cost-effective solutions</h4>
                          <p>Opting for ceramic injection moulding brings you an opportunity to obtain complex designs using a cost-effective process. Businesses receive financial benefits from high-volume manufacturing, especially if they need new components as an alternative to existing designs.</p>
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
          <CeramicGallery />  
          <section className="secFaq">
            <div className="lax faqLeftImg"><img src="img/faqText.svg" className="img-fluid" /></div>
            <div className="lax faqBottomImg"><img src="img/faqBottom.svg" className="img-fluid" /></div>
            <div className="container-fluid">
              <div className="row justify-content-end align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-9">
                  <h2 className="heading">Frequently Asked Questions</h2>
                  <div id="accordion" className="productAccordion">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How is Ceramic Coating Different when Used on Plastic? <span className="icon" aria-hidden="true"></span></button>                     
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>With regard to how coatings work on plastics, there is no difference in the way the product bonds to plastic. These materials are just as porous as metal, vinyl wraps, and other materials.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">When Should Ceramic Coating Be Used on Plastic? <span className="icon" aria-hidden="true"></span></button>                      
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>Ceramic coatings amplify what is underneath, they are not intended to repair or restore materials nor do they protect a windshield or other glass surfaces against rock chips (another far-fetched myth).</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What are the Features and Benefits of Ceramic Coatings for Plastics? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>Enhanced Vibrance</p>
                          <p>Makes Cleaning Easy</p>
                          <p>Extra Protection Against Fading</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How Long Does Ceramic Coating Last on Plastic? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>Ceramic coatings last just as long on plastic rims or covers as they do on other surfaces. In fact, there really is no difference in their longevity, application, or level of protection when they are used on plastic surfaces.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 pr-md-0 pl-md-5">
                  <img src="img/faqRight.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>         
          <RelatedProducts ceramic={true} glass={true} leather={true} />        
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
      <Footer selected='ceramic'/>       
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video4'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video4" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video4.mp4" type="video/mp4"/>
              </video>  
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PlasticCeramic;
