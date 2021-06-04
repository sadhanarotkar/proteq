import Head from 'next/head'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
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

export default function LeatherCeramic() {
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
                  <p>Flexible Ceramic Coating for Genuine & Synthetic Leather Surfaces. High Durability & Hydrophobicity. Renew Faded Leather Surfaces. Most Advanced Protection for Your Interior! Proteq's Ceramic Leather & Coating Is a Clear, Semi-Permanent Ceramic Nano-Coating That Protects Your Vehicle from Wear and Tear, Colour Fading, Stains & Spills, and Uv Rays While Repelling Water, Dirt and Other Contaminants.</p>
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
                          <a className="nav-item nav-link active">leather ceramic</a>
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
              <div className="tab-pane fade show active" id="nav-series3" role="tabpanel" aria-labelledby="nav-series3-tab">
                <div className="container-fluid">
                  <img src="img/leather-ceramic-text.svg" className="img-fluid my-md-5 productTextImg" />   
                  <div className="row justify-content-center align-items-center">
                    <img src="img/ceramicProduct-bg.png" className="ceramicProductImg" />
                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                      <img src="img/leather-ceramic.png" className="img-fluid productImg" />
                      <div className="lax ceramicProductBall1"><img src="img/aboutIcon3.png" className="img-fluid" /></div>  
                      <div className="lax ceramicProductBall2"><img src="img/aboutIcon2.png" className="img-fluid" /></div>  
                      <div className="lax ceramicProductBall3"><img src="img/aboutIcon1.png" className="img-fluid" /></div>  
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-left px-sm-5">
                      <h2 className="heading mb-md-4">leather ceramic</h2>  
                      <p>Infused with Patent-Pending Ceramic Glow Technology, with Features That Act as an Application Aid Allowing Users or Professionals the Ability to Never Miss a Spot and Make Sure the Coating Is Perfect Every Time You Apply It! Specifically Formulated for Natural, Sealed, and Synthetic Leathers and Vinyl Surfaces Including Your Dash, Door Panels, and Other Hard Interior Surfaces. Not Suitable for Aniline Leathers or for Use Over the Top of Adam’s Leather Conditioner.</p>  
                      <p>Extremely Hydrophobic! Proteq's New Interior Ceramic Coating Is a Super Durable Barrier to Protect Your Seats or Hard Interior Surfaces from Dirt, Liquids, Fading, and Other Contaminants, with Outstanding Water Beading That Makes Water Almost Jump Off the Surface! This Nano-Coating Prevents Stains and Makes Cleaning Your Interior Surfaces Easier and More Efficient. 110% Satisfaction Guarantee!</p>
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
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                    <OwlCarousel className='owl-theme' loop margin={10} nav items={1} dots={false} autoplay={true}>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Permanent Adhesion</h4>
                          <p>Forms a permanent adhesion to the surface, which means no reapplication is required (subject to general wear and tear).</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Chemical Resistant</h4>
                          <p>Resistant to harmful chemicals that would otherwise remove other protective products on the market.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Latest Ceramic Nanotechnology</h4>
                          <p>At the forefront of ceramic nanotechnology, with ongoing lab test and product updates to ensure the products are always leading the way.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">UV Resistant</h4>
                          <p>Incorporate UV stabilisers to ensure your paintwork is always protected from harmful UV rays which may cause fading or discolouration over time.</p>
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
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Will ceramic coating leather protection prevent jean dye? <span className="icon" aria-hidden="true"></span></button>                     
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>Yes, our Leather Protection allows you up to 12-24 hours to clean off jean dye before it penetrates into the leather.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What about interior protection? <span className="icon" aria-hidden="true"></span></button>                      
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>Ceramic Pro is also offered for suede, plastic, rubber and textile. This revolutionary product works for old and new vehicles.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What kind of preparation has to happen before it's applied? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>Most of the time, we suggest some paint correction. This process is basically removing all the scratches and blemishes before we lock in the perfect look with the Ceramic Pro coating.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What else does a Ceramic Leather Protection feature? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>The CP Leather coating also features a super hydrophobic effect which enables any liquid spills to simply bead up on the surface and be easily wiped off without affecting the leather.</p>
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
