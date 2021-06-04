import Head from 'next/head'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import CeramicProductVideo from './components/ceramic-product-video'
import CeramicGallery from './components/ceramic-gallery'
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

export default function PlasticCeramic() {
  return (
    <main className="content">
      <Head>
        <title>Ceramic</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Header />
        <div className="productWrapper">
          <section className="productBanner ceramicBanner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <h2 className="heading mb-md-4">Ceramic</h2>
                  <p>Plastic Ceramic is a unique coating for plastic and rubber surfaces suitable for both interior and exterior use. Plastic and rubber surfaces coated with Ceramic Pro Plastic will feature a super hydrophobic effect with excellent wear resistance. The coating will add a moderate sheen to the surface making it a great permanent finish for both exterior and interior plastics no matter if they are new or need restoration. </p>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-10">
                  <img src="img/homeProduct3.png" className="img-fluid mt-md-5 ceramicBannerImg" />
                  <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                  <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>                  
                </div>
              </div>
            </div>
            <div className="tabSpace" id="tab"></div>
          </section>
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            <nav className="category-nav">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <div className="container mb-0">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-11">
                      <div className="owl-carousel owl-theme tab-carousel">
                        <Link href="ceramic#tab">
                          <a className="nav-item nav-link">Ceramic shield</a>
                        </Link>
                        <Link href="leather-ceramic#tab">
                          <a className="nav-item nav-link">leather ceramic</a>
                        </Link>
                        <Link href="plastic-ceramic#tab">
                          <a className="nav-item nav-link active">Plastic ceramic</a>
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
