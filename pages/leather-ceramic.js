import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import CeramicTab from '../components/CeramicTab'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ContactUS from '../components/ContactUsCommon'
import CeramicBanner from './components/ceramic-banner'
import CeramicRelatedProduct from '../components/CeramicRelatedProduct'
import Link from 'next/dist/client/link';

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

const LeatherCeramic = ()=>{
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
          <CeramicBanner leather={true}/>
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            
            <div className="category-nav mobTabs">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <Link href='/ceramic'>
                  <div className="tabPrev"><i className="fa fa-angle-left"></i></div>
                </Link>
                <Link href='/ceramic'> 
                  <a className="nav-item nav-link active">Leather Ceramic</a>
                </Link>
                <Link href='/plastic-ceramic'>
                  <div className="tabRight"><i className="fa fa-angle-right"></i></div>
                </Link>
              </div>
            </div>
            <div className="deskTabs">
              <CeramicTab leather='active' /> 
            </div>
             
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
                      <p>Proteq’s Leather Ceramic Shield is the most durable leather protectant. It forms a flexible shell of protection on top of the surface that prevents the leather’s natural oils from emerging in the first place, ensuring the leather retains its soft, tactile feel. The Ceramic Leather will not cause the leather to discolour or fade. </p>
                      <p>Extremely Hydrophobic! Proteq's Leather Ceramic creates a Super Durable Barrier to Protect Your Seats or any Leather Surfaces from Dirt, Liquids, Fading, and Other Contaminants, with Outstanding Water Beading Feature That Makes Water Almost Jump Off the Surface! This Nano-Coating Prevents Stains and Makes Cleaning Your Interior Surfaces Easier and More Efficient. </p>                      
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
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                    <OwlCarousel className='owl-theme' loop margin={10} nav items={1} dots={false} autoplay={true}>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Chemical Resistant</h4>
                          <p>Resistant to harmful chemicals that would otherwise damage your leather furniture or car seats.</p>
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
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Easy To Clean</h4>
                          <p>The leather shield creates a hydrophobic surface, which means, liquids will bead up on the surface and can be easily wiped away.</p>
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
                          <p>Leather ceramic is also offered for suede, plastic, and textile. This revolutionary product works for old and new vehicles.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What kind of preparation has to happen before it's applied? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>Most of the time, we suggest some interior cleaning & leather conditioning before application. This process is basically removing all the scratches and blemishes before we lock in the perfect look with the leather ceramic coating.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What else does a Ceramic Leather Protection feature? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>The leather ceramic coating also features a super hydrophobic effect which enables any liquid spills to simply bead up on the surface and be easily wiped off without affecting the leather.</p>
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
          <CeramicRelatedProduct ceramic={true} glass={true} plastic={true} />        
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
      <Footer selected='ceramic'/>      
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video3'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video3" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video3.mp4" type="video/mp4"/>
              </video>  
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LeatherCeramic;