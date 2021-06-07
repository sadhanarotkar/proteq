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

const MicrofiberCloth = ()=>{
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
        <title>Microfiber cloth</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      
      <Header />
        <div className="productWrapper microWrapper">
          <section className="productBanner microBanner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <h2 className="heading mb-md-4">Microfiber cloth</h2>
                  <p>Proteq Microfibre Car Cloth incorporates a unique absorbent microfiber technology. This cloth removes oily or filmy residues of waxes, polishes, glaze and fingerprints.</p>
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
                  <p>The Microfibre cloth is highly effective due to the revolutionary material blend, inspired by fish scales. It can be used either dry or damp. Dry: Using it dry is perfect for dusting, drying and wiping over surfaces. Damp: To use it damp, first wet and then wring any excess water. This method is suitable for cleaning and polishing a range of surfaces. The inside shield is Non-scratching, Lint-free, Quickly removes dust and Retains many times its weight of water. Proteq Microfibre Car Cloth incorporates a unique absorbent microfiber technology. This cloth removes oily or filmy residues of waxes, polishes, glaze and fingerprints.</p>  
                  <button className="btn hvr-fade mt-4" data-toggle="modal" data-target="#quoteModal">Get A Quote</button>
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
                      <img src="img/video10.png" className="img-fluid" />
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
                          <h4 className="heading">Perfect, Streak-Free Wiping</h4>
                          <p>Tired of leaving smears or lint behind with all the other microfiber cloths? The microfiber cloth is lint-free and smear-free. Meaning one quick wipe, and no trace is left behind. Mirrors, windows and glasses have never looked so shiny!</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Super Absorbent</h4>
                          <p>Featuring super absorption technology, the microfiber cloth collects dirt and liquid up to 7 x its own weight.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Durable and Reliable</h4>
                          <p>Never worry about poor quality materials wearing down over time. The microfiber cloth was crafted to last! Featuring a durable, long-lasting design and self-cleaning function means it's easy to use and lasts a lifetime.</p>
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
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is Microfiber made of? <span className="icon" aria-hidden="true"></span></button>                     
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>Microfiber is a blend of polyester and polyamide. It is a lightweight and durable material comprised of tiny threads that are 100 times thinner than a human hair. It is constructed in a blend of either 80/20 or 70/30 ratio of polyester/polyamide.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What surfaces are safe for Microfiber? <span className="icon" aria-hidden="true"></span></button>                      
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>They are safe for virtually every surface and will never scratch or harm anything you use them on. Use on tile, linoleum, glass, wood, ceramic, marble, granite, plastic, vinyl, leather, and many more.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can I use a Chemical Cleanser with the cloth? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>You can, but you don't have to. Microfiber removes 98-99% of all dirt with just water as a detergent. Use your favourite cleanser if you want to, but stay away from ones that contain bleach or other corrosive ingredients.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How do I Clean the cloth? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>Wash with warm soapy water and rinse well. The warm water opens up the microfibres, allowing them to release the locked-in dirt. You may also put the cloth in the washing machine and then dry them in the dryer on low. DO NOT USE fabric softeners of any kind as the chemicals clog the microfiber, making them less effective. DO NOT USE bleach either because it corrodes the fibres over time, making them less effective. DO NOT IRON</p>
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
      <Footer selected='microfibre cloth' />      
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video10'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video10" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video10.mp4" type="video/mp4"/>
              </video>  
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


export default MicrofiberCloth;