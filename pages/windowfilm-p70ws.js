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

const WindowfilmP70WS = ()=>{
  return (
    <main className="content">
      <Head>
        <title>Window Films P - 70WS</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>      
      <Header />
        <div className="productWrapper windowWrapper">
          <SunfilmBanner />
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            
            <div className="category-nav mobTabs">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <Link href='/windowfilm-p70'>
                  <div className="tabPrev"><i className="fa fa-angle-left"></i></div>
                </Link>
                <Link href='/windowfilm-p70ws'> 
                  <a className="nav-item nav-link active">P - 70WS</a>
                </Link>                
                <div className="tabRight"></div>
                
              </div>
            </div>
            <div className="deskTabs">
              <SunfilmTab sunfilmp70ws='active'/>
            </div>

            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-series2" role="tabpanel" aria-labelledby="nav-series2-tab">
                <div className="container-fluid">
                  <img src="img/p70ws.svg" className="img-fluid my-md-5 productTextImg" />     
                  <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                      <div className="paintProductImgs">
                        <div className="lax productImg1">
                          <img src="img/p70ws.png" className="img-fluid" style={{ transform: 'rotate(-105deg)', height:'auto'}} />
                        </div>
                        <div className="lax productImg2">
                          <img src="img/p70ws.png" className="img-fluid" style={{ transform: 'rotate(105deg)', height: 'auto'}} />
                        </div>                         
                        <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                        <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>
                      </div>                        
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-left px-sm-5">
                      <h2 className="heading mb-md-4">P - 70WS</h2> 
                      <p>Proteq offers automotive window films designed to provide the custom look you desire, no matter what vehicle you drive. Our automotive window films help protect fabric and leather interiors from sun fading and deterioration. In addition, they add a degree of safety by helping to hold broken glass in place in the event of an accident or vandalism. Backed by a strong warranty to give you the peace of mind that comes from knowing you've made the right choice.</p> 
                      <p>P70 | WS is of great worth that brings sun control to a whole new level for your building too. Sunlight streaming through windows can create excessive heat, uncomfortable hot spots and glare. Proteq's P70 | WS films use multi-layer optical film and nano-technology to reject up to 97% of the sun's infrared light and heat coming through your windows. These films also reject up to 99.9% of damaging UV rays to reduce fading of your furnishings, offering SPF 1000+ that protects your interior's and skin. Protects dashboard from fading and reduces glare effectively.</p>  
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
                          <h4 className="heading">Lets in the light but keeps out the heat and damaging UV rays without impacting your car's aesthetics or your view.</h4>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">The precision with which light waves are controlled as they pass through or reflect off of hundreds of layers of film.</h4>                          
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">These spectrally selective films reject up to 97% of the sun's heat-producing infrared light to keep you cool, comfortable and protected.</h4>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 text-center">
                    <div className="d-flex">
                      <div className="lax paintBenefitImg1"><img src="img/Vertical-S2.png" style={{ transform: 'rotate(5deg)'}} className="img-fluid" /></div>
                      <div className="lax paintBenefitImg2"><img src="img/Vertical-S2.png" style={{ transform: 'rotate(165deg)'}} className="img-fluid" /></div>               
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
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Is the multi-layered nanotechnology film guaranteed?  <span className="icon" aria-hidden="true"></span></button>                     
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
                    <div className='item'></div>
                    <div className='item'>
                      <Link href="/sunfilm-p70">
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <div style={{transform: 'rotate(5deg)'}}>
                              <img src="img/Vertical-P70.png" />
                            </div>
                          </div>
                          <h5 className="heading">P - 70</h5>
                          <p>Proteq presents its P- 70, The Ultimate Multilayer Nano-technology, clear film technology with outstanding IR rejection</p>
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
export default WindowfilmP70WS;