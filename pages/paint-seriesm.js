import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import PaintBanner from './components/paint-banner'
import ProductFaq from './components/product-faq'
import ProductTestimonial from './components/product-testimonial'
import PaintTab from '../components/PaintTab'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ContactUS from '../components/ContactUsCommon'
import PaintRelatedProducts from '../components/PaintRelatedProducts'
import Link from 'next/link';

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

const PaintSeriesm = ()=>{

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
        <title>Paint Protection Film</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      
      <Header />
        <div className="productWrapper paintProductWrapper">
          <PaintBanner />
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            
            <div className="category-nav mobTabs">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                  <Link  href={{
                    pathname: '/paint-series5',
                    query: {value:true},
                  }}>
                  <div className="tabPrev"><i className="fa fa-angle-left"></i></div>
                </Link>
                  <a className="nav-item nav-link active">M series</a>
                  <div className="tabRight"></div>
              </div>
            </div>
            <div className="deskTabs">
              <PaintTab seriesm='active'/>  
            </div>

            <div className="tab-content" id="nav-tabContent">              
              <div className="tab-pane fade show active" id="nav-seriesm" role="tabpanel" aria-labelledby="nav-seriesm-tab">
                <div className="container-fluid">
                  <img src="img/m-seriesText.svg" className="img-fluid my-md-5 productTextImg" />     
                  <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-9">
                      <div className="paintProductImgs">
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
                      <h2 className="heading mb-md-4">M series</h2>  
                      <p>The M Paint Protection Film series comes in Polyurethane material with 0.15mm ± 0.02mm thickness. It consists of two layers with 1.52m x 15m size and no Patent Coating. Its performance has a heat repair & Hydrophobic feature, and a 3 years warranty against manufacturing defects.</p>  
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
                          <h4 className="heading">Keeps Your Car Looking New and Shiny</h4>
                          <p>PPF provides a permanent protective coat over your car’s paint, which helps you in keeping your car’s look new and shiny for a lot longer. It also prevents your car’s paint from fading and gives it a polished glossy appearance at all times.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Gives Your Car A Better Resale Value</h4>
                          <p>Even if your car runs smoothly, poor appearance can significantly lower down its resale value. Paint protection is important to retain your car’s resale value as it protects your exterior from environmental and superficial damage.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Makes Car Cleaning Easier</h4>
                          <p>PPF repels dust, so your car’s exterior will not have a dust build-up problem. This makes the cleaning job a lot easier because often you can simply use a soft cloth to clean your car instead of using water every time.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Repels Environmental Damage</h4>
                          <p>Harmful UV rays of the sun can damage your car’s paint and make it look old too soon. Paint protection not only prevents your paint from UV rays, but also from scratches, rust, nicks, burns, etc.</p>
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
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Is the paint protection film guaranteed? <span className="icon" aria-hidden="true"></span></button>                     
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>Yes, our manufactures offer a 3- 7 years warranty against cracking, peeling, hazing and bubbling.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Can it be removed? <span className="icon" aria-hidden="true"></span></button>                      
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>Yes, our paint protection films can be safely removed if need be without leaving any residue and without damaging the paint.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Are there any special precautions or maintenance when washing the film? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>No, you can wash and wax the vehicle just like you would to any other car. In fact, we recommend waxing the paint protection film to help bring out the shine.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What happens if I scratch the film? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>If the scratch is a minor one, our self-healing paint protection film cures the scratch on its own! Just leave your car as it is in the sun, see the magic happen.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 pr-md-0 pl-md-5">
                  <img src="img/galleryImgs/img84.jpeg" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
          <PaintRelatedProducts series2={true} series3={true} series5={true} />
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
              <button type="button" onClick={((e) => pause('video9'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video9" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video9.mp4" type="video/mp4"/>
              </video>  
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PaintSeriesm;