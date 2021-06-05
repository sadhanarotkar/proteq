import Head from 'next/head'
import Link from 'next/link'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import CeramicBanner from './components/ceramic-banner'
import CeramicGallery from './components/ceramic-gallery'
import ProductFaq from './components/product-faq'
import ProductTestimonial from './components/product-testimonial'
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

export default function Ceramic() {
  return (
    <main className="content">
      <Head>
        <title>Ceramic</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Header />
        <div className="productWrapper">
          <CeramicBanner />
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            <nav className="category-nav">
              {/* <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-series2-tab" data-toggle="tab" href="#nav-series2" role="tab" aria-controls="nav-series2" aria-selected="true">Ceramic shield</a>
                <a className="nav-item nav-link" id="nav-series3-tab" data-toggle="tab" href="#nav-series3" role="tab" aria-controls="nav-series3" aria-selected="false">leather ceramic</a>
                <a className="nav-item nav-link" id="nav-series5-tab" data-toggle="tab" href="#nav-series5" role="tab" aria-controls="nav-series5" aria-selected="false">Plastic ceramic</a>
                <a className="nav-item nav-link" id="nav-seriesm-tab" data-toggle="tab" href="#nav-seriesm" role="tab" aria-controls="nav-seriesm" aria-selected="false">glass ceramic</a>
              </div> */}              
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <div className="container mb-0">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-11">
                      <div className="owl-carousel owl-theme tab-carousel">
                        <Link href="ceramic#tab">
                          <a className="nav-item nav-link active">Ceramic shield</a>
                        </Link>
                        <Link href="leather-ceramic#tab">
                          <a className="nav-item nav-link">leather ceramic</a>
                        </Link>
                        <Link href="plastic-ceramic#tab">
                          <a className="nav-item nav-link">Plastic ceramic</a>
                        </Link>
                        <Link href="glass-ceramic#tab">
                          <a className="nav-item nav-link">glass ceramic</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-series2" role="tabpanel" aria-labelledby="nav-series2-tab">                
                <div className="container-fluid">
                  <img src="img/ceramicText.svg" className="img-fluid my-md-5 productTextImg" />     
                  <div className="row justify-content-center align-items-center">
                    <img src="img/ceramicProduct-bg.png" className="ceramicProductImg" />
                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                      <img src="img/homeProduct3.png" className="img-fluid productImg" />
                      <div className="lax ceramicProductBall1"><img src="img/aboutIcon3.png" className="img-fluid" /></div>  
                      <div className="lax ceramicProductBall2"><img src="img/aboutIcon2.png" className="img-fluid" /></div>  
                      <div className="lax ceramicProductBall3"><img src="img/aboutIcon1.png" className="img-fluid" /></div>  
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-left px-sm-5">
                        <h2 className="heading mb-md-4">Ceramic shield</h2>  
                        <p>Who wouldn't want their car to look as good and brand new as it did the day they got it. You thoroughly wash it frequently and apply a brand new coat of wax every few months. However, swirl marks, chips, and stains populate on your vehicle’s exterior despite your efforts. Moreover, water spots, dirt, and dirt begin clinging to your car the day when you provide it with a wash. Some notice that it's like powder coating used to guard your car and machinery against rust and weather that you'll notice from somewhere like these Powdercoat Services.</p>  
                        <p>What if there was a product that would help with the modification of the whole narrative. Perhaps a product that might offer protection from environmental hazards and make your car easier to scrub, whereas not requiring continual application.? Well, here we are with great news! Ceramic Coating, is your car's best friend! </p>
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
                      <img src="img/video1.png" className="img-fluid" />
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
              </div>
            </div>
            <div className="benefitProduct">
              <div className="container-fluid">  
                <img src="img/benifitText.svg" className="img-fluid benefitText" />            
                <div className="row justify-content-end align-items-center">
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                    <OwlCarousel className='owl-theme' loop margin={10} nav items={1} dots={false} autoplay={true}>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Protection from UV Damage / Oxidization</h4>
                          <p>If a vehicle is often exposed to the sun, its paint will begin to oxidize, resulting in dulled and faded paint. A layer of Ceramic Coating protects a vehicle’s paint from the sun’s ultraviolet rays, thereby reducing the amount of oxidization.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Protection from Chemical Stains and Etching</h4>
                          <p>Another danger for your car is chemical staining from naturally acidic contaminants. Ceramic Coating keeps some contaminants from bonding to your vehicle’s paint. The result is that your vehicle will be more resistant to staining and etching, provided the contaminant is removed promptly.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Ease of Cleaning</h4>
                          <p>One of the most significant features of Ceramic Coating is that it is hydrophobic, which is a fancy way of saying it repels water. When a vehicle has hydrophobic Ceramic Coating, water will bead on the surface and slide off more easily. This means that mud and grime will have a more difficult time bonding to your vehicle’s paint, and when you wash your car, contaminants can be removed with less effort.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Enhanced Gloss</h4>
                          <p>If you want your paint to pop with gloss, you will want to add Ceramic Coating. A good Ceramic Coating enhances the reflective properties of your car’s paint and clear coat, adding to the depth and clarity of your paint.</p>
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
          <ProductFaq />        
          <section className="secRelatedProducts">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12">
                  <h1 className="heading text-center mb-5">Related Products</h1>
                  <div className="owl-carousel owl-theme relatedProduc-carousel">
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
                    <div className='item'>
                      <Link href='glass-ceramic'>
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <img src="img/glass-ceramic.png" />
                          </div>
                          <h5 className="heading">glass ceramic</h5>
                          <p>Having glass that is clean and clear is essential for driving to give you the best visibility possible, which is especially important during bad weather.</p>
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
      <Footer selected='ceramic' />      
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video1.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
