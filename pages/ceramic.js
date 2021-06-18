import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import CeramicBanner from './components/ceramic-banner'
import ProductTestimonial from './components/product-testimonial'
import CeramicTab from '../components/CeramicTab'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ContactUS from '../components/ContactUsCommon'
import CeramicRelatedProduct from '../components/CeramicRelatedProduct'
import Link from 'next/link';

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

 const Ceramic = ()=>{
  
  return (
    <main className="content">
      <Head>
        <title>Ceramic</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Header />
        <div  className="productWrapper">
          <CeramicBanner ceramic={true}/>
          <section  className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            
            <div className="category-nav mobTabs">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <div className="tabPrev"></div>
                  <Link  href={{
                    pathname: '/ceramic',
                    query: {value:true},
                  }}>  
                  <a className="nav-item nav-link active">Ceramic shield</a>
                </Link>
                <Link  href={{
                    pathname: '/leather-ceramic',
                    query: {value:true},
                  }}>  
                  <a>
                  <div className="tabRight"><i className="fa fa-angle-right"></i></div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="deskTabs">
              <CeramicTab shield='active' /> 
            </div>

            <div  className="tab-content" id="nav-tabContent">
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
                        <p>Who wouldn't want their car to look as good and brand new as it did the day they got it. You thoroughly wash it frequently and apply a brand new coat of wax every few months. However, swirl marks, chips, and stains populate on your vehicle’s exterior despite your efforts. Moreover, water spots and dirt begin clinging to your car the day when you provide it with a wash.</p>  
                        <p>What if there was a product that would help with the modification of the whole narrative. Perhaps a product that might offer protection from environmental hazards and make your car easier to scrub, whereas not requiring continual application.? Well, here we are with great news! Proteq’s Ceramic Shield, is your car's best friend! </p>                        
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
                          <p>If a vehicle is often exposed to the sun, its paint will begin to oxidize, resulting in dulled and faded paint. A layer of Ceramic Shield coating protects a vehicle’s paint from the sun’s ultraviolet rays, thereby reducing the amount of oxidization.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Protection from Chemical Stains and Etching</h4>
                          <p>Another danger for your car is chemical staining from naturally acidic contaminants. Ceramic Shield keeps some contaminants from bonding to your vehicle’s paint. The result is that your vehicle will be more resistant to staining and etching, provided the contaminant is removed promptly.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Ease of Cleaning</h4>
                          <p>One of the most significant features of Ceramic Shield is that it is hydrophobic, which is a fancy way of saying it repels water. When a vehicle has hydrophobic coating, water will bead on the surface and slide off more easily. This means that mud and grime will have a more difficult time bonding to your vehicle’s paint, and when you wash your car, contaminants can be removed with less effort.</p>
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
                    <img src="img/LC.png" className="img-fluid" />                    
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
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How soon can the vehicle be washed after coating application? <span className="icon" aria-hidden="true"></span></button>                     
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>We recommend a 7 days “no wash” period following the application. After this, car soap and water, rinse less, or waterless wash are all acceptable forms of washing.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Which are the surfaces areas covered with Ceramic Shield Coating? <span className="icon" aria-hidden="true"></span></button>                      
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>It depends on the package you choose to do. Ceramic Shield coating is majorly designed as a PAINT PROTECTION coating for painted metal & plastic surfaces. Our Ceramic Shield family also consists of products that can be applied for other surfaces also like Wheels, Windshield, Window glasses, Chrome, Interior Leather, etc.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Is Ceramic Coating for Old Car or New Car? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>FOR BOTH. New Car needs it the most, to make it look even more beautiful and to maintain your Car clean easily & effortlessly.</p>
                          <p>Old Car is to be done if not done yet, to remove dullness & fadedness and to bring back your New Car shining & protect it further.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Will The Results For My Car Be The Same Way Shown In Your Videos? <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>No. Each Car is different in terms of its paint quality, ageing & condition while performing the process. So, the results vary from one Car to another & will not be uniform across models</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 pr-md-0 pl-md-5">
                  <img src="img/trainingImgs/day3/img60.JPG" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
          <CeramicRelatedProduct glass={true} plastic={true} leather={true} />        
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
      <Footer selected='ceramic' />      
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video1'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video1" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video1.mp4" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Ceramic;
