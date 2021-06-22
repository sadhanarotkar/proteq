import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

const Training=()=> {
  const router = useRouter()

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
        <title>Training</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      
      <Header />
        <div className="aboutWrapper trainingWrapper">
          <section className="aboutBanner trainigBanner" style={{background: '#e4ecef'}}>
            <div className="aboutBannerTop">
              <div className="aboutBannerContent">
                <div className="container">
                  <img src="img/testimonial-3D-Shield.png" className="img-fluid" style={{left: '0'}} />       
                  <div className="lax aboutHeading-ball1"><img src="img/aboutIcon4.png" className="img-fluid" /></div>
                  <div className="lax aboutHeading-ball2"><img src="img/ball-small1.png" className="img-fluid" /></div> 
                  <div className="aboutHeading">
                    <h2 className="heading">
                      <span className="smallText">
                        <span style={{color: '#f2ba0f'}}>T</span>
                        <span style={{color: '#511e6d'}}>h</span>
                        <span style={{color: '#b10645'}}>e</span> 
                        <span> </span>
                        <span style={{color: '#f2ba0f'}}>D</span>
                        <span style={{color: '#b10645'}}>E</span>
                        <span style={{color: '#2199c9'}}>X</span>
                        <span style={{color: '#f2ba0f'}}>T</span>
                        <span style={{color: '#511e6d'}}>E</span>
                        <span style={{color: '#b10645'}}>R</span>
                        <span style={{color: '#f2ba0f'}}>I</span>
                        <span style={{color: '#b10645'}}>T</span>
                        <span style={{color: '#2199c9'}}>Y</span> 
                      </span>
                      <br></br>
                      <span style={{color: '#511e6d'}}>S</span>
                      <span style={{color: '#b10645'}}>c</span>
                      <span style={{color: '#f2ba0f'}}>h</span>
                      <span style={{color: '#b10645'}}>o</span>
                      <span style={{color: '#2199c9'}}>o</span>
                      <span style={{color: '#f2ba0f'}}>l</span> </h2> 
                  </div> 
                </div>
              </div>
            <img src='img/trainingBg.jpg' className="img-fluid" />             
            </div>
            <div className="lax aboutBannerLeftImg"><img src="img/training.svg" className="img-fluid" /></div>
            <div className="lax aboutBannerRightImg"><img src="img/aboutRightImg.svg" className="img-fluid" /></div>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
                  <h2 className="heading mb-md-4">About Training</h2>
                  <p>This Proteq training course teaches participants the skills needed to become an authorized Proteq PPF installer/technician. Designed with the entire shop in mind, this course provides the foundation needed to succeed for any member of your team – for sales, service, installers/technicians, as well as owners. Participants will learn the basics of Paint Protection Film, Wraps and its application.</p>
                  <p>This workshop is aimed at helping the attendees to learn the full breath of techniques to use and apply Paint Protection Film. Upon completion participants are awarded a Proteq certificate. Participants will leave with a better understanding of the industry at hand, the materials and tools needed and more confidence in their technique and application of PPF.</p>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                  <img src="img/aboutTraining.png" className="img-fluid" />
                  {/* <div className="lax aboutRightImg"><img src="img/aboutIcon3.png" className="img-fluid" /></div>           */}
                </div>
              </div>
            </div>
          </section>
          <section className="secFaq">
            <div className="lax faqLeftImg"><img src="img/programme.svg" className="img-fluid" /></div>
            <div className="lax faqBottomImg"><img src="img/faqBottom.svg" className="img-fluid" /></div>
            <div className="container-fluid">
              <div className="row justify-content-end align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-9">
                  <h2 className="heading">In this programme</h2>
                  <div id="accordion" className="productAccordion">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Types of film <span className="icon" aria-hidden="true"></span></button>                     
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>There are so many types of Paint Protection Films available, but did you know how they are made & what they do?</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Tools <span className="icon" aria-hidden="true"></span></button>                      
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>You will always need tools to do a great installation. Learn the types of tools & how to use them.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Vehicle Preparation <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>So how will you start applying? We’ll teach you the basics.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Paint Correction <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>Did you know why you need this? We’ll make you a pro.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFive">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Application Solutions & Mixing Ratios <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                        <div className="card-body">
                          <p>There are so many more things to mix than just cocktails! See what the pros do.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingSix">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Film Repositioning <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                        <div className="card-body">
                          <p>Get the most out of that roll, make your customer happy!</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingSeven">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">Trimming and Other Techniques <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                        <div className="card-body">
                          <p>How efficient can you be in utilising and saving! A surprise for you to follow</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingEight">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">Best Practices & Tips <span className="icon" aria-hidden="true"></span></button>
                      </div>
                      <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                        <div className="card-body">
                          <p>Everyone need some, and some give them too! Learn and share.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 pr-md-0 pl-md-5">
                  <img src="img/trainingImg.JPG" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
          <section className="secHomeTestimonial">
            <img src="img/testimonial-bottom.png" className="testimonialBottomImg" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="testimonialLeft">
                    <img src="img/testimonial-3D-Shield.png" className="img-fluid" />
                  </div>
                  <h1 className="heading">Testimonials</h1>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6 px-5 testimonialVideoBox">
                  <img src="img/metro-quote.svg" className="img-fluid testimonialQuoteIcon" />
                  <OwlCarousel className='owl-theme' loop margin={10} nav items={1} dots={false} autoplay={true}>
                    <div className='item'>
                      <div className="testimonialContent">
                        <a href="#" data-toggle="modal" data-target="#testiModal1">
                          <img src="img/testimonialImg1.jpg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <a href="#" data-toggle="modal" data-target="#testiModal2">
                          <img src="img/testimonialImg2.jpg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <a href="#" data-toggle="modal" data-target="#testiModal3">
                          <img src="img/testimonialImg3.jpg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <a href="#" data-toggle="modal" data-target="#testiModal4">
                          <img src="img/testimonialImg4.jpg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <a href="#" data-toggle="modal" data-target="#testiModal5">
                          <img src="img/testimonialImg5.jpg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <a href="#" data-toggle="modal" data-target="#testiModal6">
                          <img src="img/testimonialImg6.jpg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <a href="#" data-toggle="modal" data-target="#testiModal7">
                          <img src="img/testimonialImg7.jpg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <a href="#" data-toggle="modal" data-target="#testiModal8">
                          <img src="img/testimonialImg8.jpg" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section>
          <section className="bottomContact">
            <div className="lax contactBottomLeft"><img src="img/contactBottomLeft.svg" className="img-fluid" /></div>         
            <div className="lax contactBottomRight"><img src="img/contactBottomRight.svg" className="img-fluid" /></div> 
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-12" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                  <h2 className="heading">GET IN TOUCH WITH US</h2>
                  <p className="mt-0 mb-3">The Best Car Service Awaits You!</p>
                  <p className="mt-0">Proteq Works On Excellence To Deliver Credibility! We're never going to leave you hanging there. For any detail or information CONTACT US!</p>
                  <Link href="/contact"><button className="btn hvr-sweep-to-right mb-4">Contact Us</button></Link>                  
                </div>
              </div>              
              <div className="lax bottomContact-ball1"><img src="img/aboutIcon4.png" className="img-fluid" /></div>
              <div className="lax bottomContact-ball2"><img src="img/ball-small1.png" className="img-fluid" /></div>
              <div className="lax bottomContact-ball3"><img src="img/aboutIcon4.png" className="img-fluid" /></div>
            </div>
            <div className="headShadow">
              <h1 className="headingShadow">Contact</h1>
            </div>
          </section>
        </div>
      <Footer />   
      <div className="modal fade fullModal" id="testiModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video1'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video1" width="100%" height="100%" controls>
                <source src="https://proteq.co.in:8444/backend/videos/Testimonial1.MOV" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div> 
      <div className="modal fade fullModal" id="testiModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video2'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video2" width="100%" height="100%" controls>
                <source src="https://proteq.co.in:8444/backend/videos/Testimonial2.MOV" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div> 
      <div className="modal fade fullModal" id="testiModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video3'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video3" width="100%" height="100%" controls>
                <source src="https://proteq.co.in:8444/backend/videos/Testimonial3.MOV" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div> 
      <div className="modal fade fullModal" id="testiModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video4'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video4" width="100%" height="100%" controls>
                <source src="https://proteq.co.in:8444/backend/videos/Testimonial4.MOV" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div> 
      <div className="modal fade fullModal" id="testiModal5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video5'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video5" width="100%" height="100%" controls>
                <source src="https://proteq.co.in:8444/backend/videos/Testimonial5.MOV" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div> 
      <div className="modal fade fullModal" id="testiModal6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video6'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video6" width="100%" height="100%" controls>
                <source src="https://proteq.co.in:8444/backend/videos/Testimonial6.MOV" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div> 
      <div className="modal fade fullModal" id="testiModal7" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video7'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video7" width="100%" height="100%" controls>
                <source src="https://proteq.co.in:8444/backend/videos/Testimonial7.MOV" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div>        
      <div className="modal fade fullModal" id="testiModal8" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video8'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video8" width="100%" height="100%" controls>
                <source src="https://proteq.co.in:8444/backend/videos/Testimonial8.MOV" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div>   
    </main>
  )
}

export default Training;