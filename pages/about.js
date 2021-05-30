import Head from 'next/head'
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

export default function About() {
  return (
    <main className="content">
      <Head>
        <title>About Us</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Loader />
      <Header />
        <div className="aboutWrapper">
          <section className="aboutBanner">
            <div className="aboutBannerTop">
              <div className="aboutBannerContent">
                <div className="container">
                  <img src="img/testimonial-3D-Shield.png" className="img-fluid" />       
                  <div className="lax aboutHeading-ball1"><img src="img/aboutIcon4.png" className="img-fluid" /></div>
                  <div className="lax aboutHeading-ball2"><img src="img/ball-small1.png" className="img-fluid" /></div> 
                  <div className="aboutHeading">
                    <h2 className="heading">About <br></br><span>Proteq</span> </h2> 
                  </div> 
                </div>
              </div>
            </div>
            <div className="lax aboutBannerLeftImg"><img src="img/aboutText.svg" className="img-fluid" /></div>
            <div className="lax aboutBannerRightImg"><img src="img/aboutRightImg.svg" className="img-fluid" /></div>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
                  <h2 className="heading mb-md-4">About Proteq Autocare</h2>
                  <p>Proteq auto care was established in 2016 by young car euthanistic entrepreneurs with the intention of authoring India’s most effective, efficient and excellent quality paint protection film (PPF) services with utmost determination and commitment.</p>
                  <p>The young minds and risk takers Mr. Nikit Zaveri, Mr. Saumin Sanghavi and Mr. Chirag Shah began their journey by starting a business venture in collaboration with a renowned and experienced company. They worked their vision from ground level, learned the procedures, gained experience and witnessed the beginning and rising of Paint Protection Film. They acquired 5 years of experience in auto care industry, simultaneously bearing a vision in their hearts and minds of launching their own brand. While working with determination and waiting for the right opportunity, Mr. Nikit Zaveri, Mr. Saumin Sanghavi and Mr. Chirag Shah found a gap in the market. They observed a gap between the high pricing and quality in the services. Companies providing the PPF services where either charging high prices enabling middle-class customers from enjoying the service or local market providing cheap materials henceforth damaging the car.</p>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                  <img src="img/homeProduct1.png" className="img-fluid" />  
                  <div className="lax homeCeramic4"><img src="img/ball-small1.png" className="img-fluid" /></div>         
                  <div className="lax homeCeramic5"><img src="img/aboutIcon2.png" className="img-fluid" /></div>       
                  {/* <div className="lax aboutRightImg"><img src="img/aboutIcon3.png" className="img-fluid" /></div>           */}
                </div>
              </div>
            </div>
          </section>
          <section className="secWhy">
            <div className="lax whyRightImg"><img src="img/whyText.svg" className="img-fluid" /></div>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                  <img src="img/whyImg.png" className="img-fluid" />         
                  <div className="lax homeCeramic4"><img src="img/aboutIcon2.png" className="img-fluid" /></div>         
                  <div className="lax homeCeramic5"><img src="img/ball-small1.png" className="img-fluid" /></div>          
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 pr-xl-5">
                  <h2 className="heading mb-md-4">Why Proteq Autocare</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="secVision">
            <div className="container-fluid headingText">
              <div className="row">
                <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 px-md-5">
                  <img src="img/ourvisionText.svg" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="lax missionLeftImg">
                <img src="img/contactFormLeft.svg" className="img-fluid" />
              </div>
              <div className="row justify-content-end align-items-center">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <h2 className="heading mb-md-4">Our Vision</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pr-md-0 pl-md-5">
                  <img src="img/visionImg.png" className="img-fluid" data-aos="fade-left" data-aos-duration="1000" />                  
                </div>
              </div>
            </div>
          </section>
          <section className="secMission">
            <div className="container-fluid headingText">
              <div className="row justify-content-end">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <img src="img/missionText.svg" className="img-fluid" />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pl-md-0 pr-md-5">
                  <img src="img/missionImg.png" className="img-fluid" data-aos="fade-right" data-aos-duration="1000" />                  
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <h2 className="heading mb-md-4">Our Mission</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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
                <div className="col-xl-6 col-lg-6 col-md-6 px-5">
                  <img src="img/metro-quote.svg" className="img-fluid testimonialQuoteIcon" />
                  <OwlCarousel className='owl-theme' loop margin={10} nav items={1} dots={false} autoplay={true}>
                    <div className='item'>
                      <div className="testimonialContent">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className="username text-yellow">- Rushabh Parekh</p>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className="username text-yellow">- Rushabh Parekh</p>
                      </div>
                    </div>
                    <div className='item'>
                      <div className="testimonialContent">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className="username text-yellow">- Rushabh Parekh</p>
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
                  <h2 className="heading">get in touch with us</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry’s standard dummy text ever</p>
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
    </main>
  )
}