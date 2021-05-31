import Head from 'next/head'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import CeramicBanner from './components/ceramic-banner'
import CeramicProductVideo from './components/ceramic-product-video'
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

export default function Ceramic() {
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
                        <a href="ceramic#tab" className="nav-item nav-link active">Ceramic shield</a>
                        <a href="leather-ceramic#tab" className="nav-item nav-link">leather ceramic</a>
                        <a href="plastic-ceramic#tab" className="nav-item nav-link">Plastic ceramic</a>
                        <a href="glass-ceramic#tab" className="nav-item nav-link">glass ceramic</a>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an </p>  
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
          <section className="secRelatedProducts">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12">
                  <h1 className="heading text-center mb-5">Related Products</h1>
                  <div className="owl-carousel owl-theme relatedProduc-carousel">
                    <div className='item'>
                      <a href="leather-ceramic" className="relatedPBox">
                        <div className="relatedPImg">
                          <img src="img/leather-ceramic.png" />
                        </div>
                        <h5 className="heading">leather ceramic</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </a>
                    </div>
                    <div className='item'>
                      <a href="plastic-ceramic" className="relatedPBox">
                        <div className="relatedPImg">
                          <img src="img/Plastic-ceramic.png" />
                        </div>
                        <h5 className="heading">Plastic ceramic</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </a>
                    </div>
                    <div className='item'>
                      <a href="glass-ceramic" className="relatedPBox">
                        <div className="relatedPImg">
                          <img src="img/glass-ceramic.png" />
                        </div>
                        <h5 className="heading">glass ceramic</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </a>
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
      <Footer selected='ceramic' />      
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
