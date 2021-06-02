import Head from 'next/head'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import CeramicBanner from './components/ceramic-banner'
import CeramicProductVideo from './components/ceramic-product-video'
import CeramicGallery from './components/ceramic-gallery'
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

export default function GlassCeramic() {
  return (
    <main className="content">
      <Head>
        <title>Ceramic</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Loader />
      <Header />
        <div className="productWrapper">
          <CeramicBanner />
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            <nav className="category-nav">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <div className="container mb-0">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-11">
                      <div className="owl-carousel owl-theme tab-carousel">
                        <a href="ceramic#tab" className="nav-item nav-link">Ceramic shield</a>
                        <a href="leather-ceramic#tab" className="nav-item nav-link">leather ceramic</a>
                        <a href="plastic-ceramic#tab" className="nav-item nav-link">Plastic ceramic</a>
                        <a href="glass-ceramic#tab" className="nav-item nav-link active">glass ceramic</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-seriesm" role="tabpanel" aria-labelledby="nav-seriesm-tab">
                <div className="container-fluid">
                  <img src="img/glass-ceramic-text.svg" className="img-fluid my-md-5 productTextImg" />    
                  <div className="row justify-content-center align-items-center">
                    <img src="img/ceramicProduct-bg.png" className="ceramicProductImg" />
                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                      <img src="img/glass-ceramic.png" className="img-fluid productImg" /> 
                      <div className="lax ceramicProductBall1"><img src="img/aboutIcon3.png" className="img-fluid" /></div>  
                      <div className="lax ceramicProductBall2"><img src="img/aboutIcon2.png" className="img-fluid" /></div>  
                      <div className="lax ceramicProductBall3"><img src="img/aboutIcon1.png" className="img-fluid" /></div>  
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-left px-sm-5">
                      <h2 className="heading mb-md-4">glass ceramic</h2>  
                      <p>Having glass that is clean and clear is essential for driving to give you the best visibility possible, which is especially important during bad weather. To help with this, a ceramic coat can be applied to your car’s glass. While most people use a ceramic coating to protect their car’s paint, it really can be applied anywhere – including the wheels, vinyl wraps, fibreglass, PPF, and glass. There are many ceramic glass coating products available on the market. But a common problem with all of them is their longevity, effectiveness, and claims that one-size-fits-all.</p>  
                      <p>If you have ever used a nanoceramic coating on your car’s surface to protect the vehicle’s paint against UV rays, then you know how effective it is due to its hydrophobic properties which allow it to repel water and other contaminants and its longevity in protecting your surface. It follows, then, that you would benefit from using it on your vehicle’s glass as well.</p>
                      <button className="btn hvr-sweep-to-right mt-4" data-toggle="modal" data-target="#quoteModal">Get A Quote</button>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <CeramicProductVideo />
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
                          <h4 className="heading">Improved Visibility</h4>
                          <p>When it is raining, the water blocks your view completely until the windshield wipers get activated. Since the ceramic coating is hydrophobic, this is a case where it is especially helpful. Ceramic coating being hydrophobic means it provides a flat, smooth surface that is resistant to water.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Easier Cleaning</h4>
                          <p>With a ceramic coating on your car’s glass, contaminants that are usually difficult to remove such as bug splatters, bird droppings, tree sap, etc. wipe off much easier. This is most helpful if you drive a commercial truck or frequently go on long road trips since your windshield will stay clean much longer and when it does get dirty, will be easier to clean.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Enhanced Clarity</h4>
                          <p>One great benefit of ceramic coating your glass is that it both repels water and greatly improves visibility without leaving behind any sort of cloudiness or haziness, unlike other products. During times of day where there is little light and/or fog and cloudiness, having crystal clear windows and windshields will always beat having reduced visibility caused by inferior products.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Scratch-Resistance</h4>
                          <p>After curing, a ceramic coating provides an extremely durable and strong protective shell that is scratch-resistant and can last up to 5 years when properly applied.</p>
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
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Why is Applying Ceramic Coating to Glass a Smart Idea? <span className="icon" aria-hidden="true"></span></button>                     
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>The ceramic car product is highly concentrated but very safe to use. When it is applied to a surface, it bonds to the upper-most layer of the material and creates a semi-permanent layer of protection that is fully transparent and exceptionally strong.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How to Apply Ceramic Coating to Glass <span className="icon" aria-hidden="true"></span></button>                      
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>The process of applying a ceramic coating to glass is no different than applying it to paint, headlights, wheels, or any other surface. However, it’s important to explain why each step should be completed, especially with glass. Leave it on to the experts!</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How long does glass coating last? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>3-5 years unlike wax and conventional polymer/ceramic coating in the market, glass coating is durable and keeps your car glossy and hydrophobic for up to 3-5 years.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How do I wash my car with a glass coating? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>When you have a glass coating on your vehicle, you can still wash it like you normally would. Use natural car cleaning soap on your vehicle, and use microfiber scrubbing brushes to get everything clean. </p>
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
                    <div className='item'>
                      <Link href='ceramic'>
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <img src="img/homeProduct3.png" />
                          </div>
                          <h5 className="heading">ceramic Shield</h5>
                          <p>Who wouldn't want their car to look as good and brand new as it did the day they got it. You thoroughly wash it frequently and apply a brand new coat of wax every few months.</p>
                        </a>
                      </Link>
                    </div>
                    <div className='item'>
                      <Link href='leather-ceramic'>
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <img src="img/leather-ceramic.png" />
                          </div>
                          <h5 className="heading">leather ceramic</h5>
                          <p>Infused with Patent-Pending Ceramic Glow Technology, with Features That Act as an Application Aid Allowing Users or Professionals</p>
                        </a>
                      </Link>
                    </div>
                    <div className='item'>
                      <Link href='plastic-ceramic'>
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <img src="img/Plastic-ceramic.png" />
                          </div>
                          <h5 className="heading">Plastic ceramic</h5>
                          <p>Plastic products, due to their durability, safety, and low manufacturing cost, are now rapidly replacing cookware items traditionally made of glass and ceramics.</p>
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
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yAoLSRbwxL8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
