import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import SunfilmBanner from './components/sunfilm-banner'
import ProductTestimonial from './components/product-testimonial'
import SunfilmTab from '../components/SunfilmTab'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ContactUS from '../components/ContactUsCommon'
import Link from 'next/link';

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

const WindowfilmP70 = ()=>{
  return (
    <main className="content">
      <Head>
        <title>Window Films P - 70</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      
      <Header />
        <div className="productWrapper windowWrapper">
          <SunfilmBanner />
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
             
            <div className="category-nav mobTabs">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <div className="tabPrev"></div>
                <Link href='/windowfilm-p70'> 
                  <a className="nav-item nav-link active">P - 70</a>
                </Link>
                <Link href='/windowfilm-p70ws'>
                  <div className="tabRight"><i className="fa fa-angle-right"></i></div>
                </Link>
              </div>
            </div>
            <div className="deskTabs">
              <SunfilmTab sunfilmp70='active'/>
            </div>
            
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-series2" role="tabpanel" aria-labelledby="nav-series2-tab">
                <div className="container-fluid">
                  <img src="img/p70.svg" className="img-fluid my-md-5 productTextImg" />     
                  <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                      <div className="paintProductImgs p70ProductImgs">
                        <div className="lax productImg1">
                          <img src="img/Vertical-P70.png" className="img-fluid " />
                        </div>
                        <div className="lax productImg2">
                          <img src="img/Vertical-P70.png" className="img-fluid" />
                        </div>                         
                        <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                        <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>
                      </div>                        
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-left px-sm-5">
                      <h2 className="heading mb-md-4">P - 70</h2>  
                      <p>Proteq presents its P- 70, The Ultimate Multilayer Nano-technology, clear film technology with outstanding IR rejection 97% heat reduction to create the perfect film for your car. Its high visible light transmission provides excellent infrared rejection, providing energy savings and enhanced comfort through quicker cooling through your car’s ac. The low interior and exterior reflectivity enhances views while enhancing exterior appearance.</p>  
                      <p>A non-metallized film, with no signal interference and no chance for corrosion, P-70 helps extend the life of your car’s upholstery by significantly reducing harmful UV rays, which is the largest cause of fading. Proteq's P70 Multilayer Nano-technology films increase personal safety by enhancing night-driving visibility. </p>
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
                          <h4 className="heading">Increased on-angle heat rejection provides additional performance benefits.</h4>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Extends the life of furnishings by rejecting UV rays, the single largest component of fading</h4>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Reduces glare and eye discomfort.</h4>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Increases personal safety by minimizing flying glass.</h4>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 text-center">
                    <div className="d-flex">
                      <div className="lax paintBenefitImg1"><img src="img/Vertical-P70.png" style={{ transform: 'rotate(5deg)'}} className="img-fluid" /></div>
                      <div className="lax paintBenefitImg2"><img src="img/Vertical-P70.png" style={{ transform: 'rotate(165deg)'}} className="img-fluid" /></div>               
                    </div>               
                    <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                    <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>  
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Is the multi-layered nanotechnology film guaranteed? <span className="icon" aria-hidden="true"></span></button>                     
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>Yes, it comes with a 5-year warranty.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Does the multi-layered nanotechnology film provide protection from the UV Rays? <span className="icon" aria-hidden="true"></span></button>                      
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>It provides you with SPF 1000+ protecting interiors & skin that blocks 99.9% UV Rays. </p>
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
          <section className="secRelatedProducts">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12">
                  <h1 className="heading text-center mb-5">Related Products</h1>
                  <div className="owl-carousel owl-theme relatedProduc-carousel">
                    <div className='item d-none d-md-block'></div>
                    <div className='item'>
                      <Link href="/sunfilm-p70ws">
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <div style={{transform: 'rotate(5deg)'}}>
                              <img src="img/Vertical-P70.png" />
                            </div>
                          </div>
                          <h5 className="heading">P - 70WS</h5>
                          <p>Proteq offers automotive window films designed to provide the custom look you desire, no matter what vehicle you drive.</p>
                        </a>
                      </Link>
                    </div>                   
                  </div>
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
                    <p className="mb-4">Proteq Works On Excellency To Deliver Credibility!</p>
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
              <button type="button" onClick={((e) => pause('video6'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video6" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video6.mp4" type="video/mp4"/>
              </video>                
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default WindowfilmP70;