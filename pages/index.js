import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
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

export default function Home() {
  const router = useRouter()
  return (
    <main className="content">
      <Head>
        <title>Home</title>
        <link rel="icon" href="img/favicon.ico" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <script src="js/owl.carousel.js"></script>
      </Head>
      <Loader />
      <Header />
      <section className="secBanner">
        <div className="owl-carousel owl-theme banner-carousel">
          <div className="item banner-item1">
            <img src="img/slide1-bg.jpg" />
            <div className="cover">
              <div className="container-fluid">
                <div className="row align-items-center align-items-center">                    
                  <div className="col-xl-4 col-lg-4 col-md-4 contentLeft">
                    <h2>Proteq <br></br><span>Autocare</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing<br></br> and typesetting industry. Lorem Ipsum has been the<br></br> industry’s standard dummy text ever since the 1500s</p>
                    <a href="about" className="btn hvr-sweep-to-right">Read More</a>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 contentRight px-md-0">                      
                    <img src="img/slide1-product.png" className="img-fluid mt-md-5" />                    
                  </div>
                </div>
              </div>
              <div className="balls">
                <img src="img/slide1Ball1.svg" className="img-fluid slideBall1" />
                <img src="img/slide1Ball2.svg" className="img-fluid slideBall2" />
                <img src="img/slide1Ball3.svg" className="img-fluid slideBall3" />
                <img src="img/slide1Ball4.svg" className="img-fluid slideBall4" />
              </div>
            </div>
          </div>                  
          <div className="item banner-item2">
            <img src="img/slide2-bg.jpg" />
            <div className="cover">
              <div className="container-fluid">
                <div className="row align-items-center align-items-center">                    
                  <div className="col-lg-4 col-md-4 contentLeft">
                    <h2>Ceramic</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has been the<br></br> industry’s standard dummy text ever since the 1500s</p>
                    <a href="ceramic" className="btn hvr-sweep-to-right">Read More</a>
                  </div>
                  <div className="col-lg-5 col-md-5 contentCenter px-md-5">                      
                    <img src="img/homeProduct1.png" className="img-fluid" />                    
                  </div>
                  <div className="col-lg-3 col-md-3 contentRight align-self-end">  
                    <h2>Shield</h2>                   
                  </div>
                </div>
              </div>
            </div>
          </div>                
          <div className="item banner-item3">
            <img src="img/slide3-bg.jpg" />
            <div className="cover">
              <div className="container-fluid">
                <div className="row align-items-center align-items-center">                    
                  <div className="col-lg-4 col-md-4 contentLeft">
                    <h2>Microfiber</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has been the<br></br> industry’s standard dummy text ever since the 1500s</p>
                    <a href="microfiber-cloth" className="btn hvr-sweep-to-right">Read More</a>
                  </div>
                  <div className="col-lg-5 col-md-5 contentCenter align-self-end">                      
                    <img src="img/slide3-product.png" className="img-fluid" />                    
                  </div>
                  <div className="col-lg-3 col-md-3 contentRight align-self-end">  
                    <h2>Cloth</h2>                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item banner-item4">
            <img src="img/slide4-bg.jpg" />
            <div className="cover">
              <div className="container-fluid">
                <div className="row align-items-center align-items-end">  
                  <div className="col-xl-5 col-lg-5 col-md-5 contentLeft align-self-end p-0">                      
                    <img src="img/slide4-product.png" className="img-fluid" />                    
                  </div>                  
                  <div className="col-xl-4 col-lg-4 col-md-4 contentRight align-self-center">
                    <h2>Paint <span>Protection Film</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has been the<br></br> industry’s standard dummy text ever since the 1500s</p>
                    <a href="paint-protection" className="btn hvr-sweep-to-right">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>        
        <div className="gotoSection">
          <button type="button" className="btn goSection"><i className="fa fa-angle-down" aria-hidden="true"></i></button>
        </div>
      </section>
      <section className="secHomeAbout">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="co-xl-5 col-lg-5 col-md-6 col-sm-12">
              <img src="img/about-car.png" className="img-fluid aboutImg" />
            </div>
            <div className="co-xl-7 col-lg-6 col-md-6 col-sm-12 pl-md -5">
              <h1 className="heading text-white">About Proteq Autocare</h1>
              <p>Proteq auto care was established in 2016 by young car euthanistic entrepreneurs with the intention of authoring India’s most effective, efficient and excellent quality paint protection film (PPF) services with utmost determination and commitment.</p>
              <a href="/about" className="readLink text-yellow">Read More</a>
            </div>
          </div>
        </div>
          <img className="img-fluid aboutLeaf" src="img/leafs.png" />
      </section>
      <section className="secHomeProduct">
        <div className="lax whyRightImg"><img src="img/productText.svg" className="img-fluid" /></div>
        <div className="container">  
          <div className="row align-items-center justify-content-center mb-md-5 pt-md-5">
            <div className="co-xl-6 col-lg-6 col-md-5 col-sm-12">
              <div className="headShadow">
                <h1 className="headingShadow">Ceramic</h1>
                <h1 className="heading">Ceramic</h1>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <a href="/ceramic" className="readLink text-pink">Read More</a>              
            </div>
            <div className="co-xl-4 col-lg-4 col-md-5 col-sm-12">
              <div className="lax productLax">
                <img src="img/homeProduct1.png" className="img-fluid" />
              </div> 
              <div className="lax homeCeramic1"><img src="img/aboutIcon3.png" className="img-fluid" /></div>
              <div className="lax homeCeramic2"><img src="img/aboutIcon2.png" className="img-fluid" /></div>
              <div className="lax homeCeramic3"><img src="img/aboutIcon1.png" className="img-fluid" /></div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center mb-md-5">
             
            <div className="co-xl-4 col-lg-4 col-md-5 col-sm-12 text-center">
              <div style={{display: 'flex'}}>
                <div className="lax productImg1">
                  <img src="img/Vertical-S2.png" className="img-fluid" style={{transform: 'rotate(5deg)'}} />
                </div>
                <div className="lax productImg2">
                  <img src="img/Vertical-S2.png" className="img-fluid" style={{transform: 'rotate(170deg)'}} />
                </div>  
              </div>              
              <div className="lax homeCeramic4"><img src="img/aboutIcon4.png" className="img-fluid" /></div>
              <div className="lax homeCeramic5"><img src="img/aboutIcon5.png" className="img-fluid" /></div>
            </div>
            <div className="co-xl-6 col-lg-6 col-md-5 col-sm-12">
              <div className="headShadow">
                <h1 className="headingShadow">Paint</h1>
                <h1 className="heading">Paint Protection Film</h1>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <a href="/paint-protection" className="readLink text-pink">Read More</a>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="co-xl-6 col-lg-6 col-md-5 col-sm-12">
              <div className="headShadow">
                <h1 className="headingShadow">Microfiber</h1>
                <h1 className="heading">Microfiber Cloth</h1>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <a href="/microfiber-cloth" className="readLink text-pink">Read More</a>
            </div>
            <div className="co-xl-4 col-lg-4 col-md-5 col-sm-12">
              <div className="lax productLax">
                <img src="img/homeProduct3.png" className="img-fluid" />
              </div> 
              <div className="lax homeCeramic1"><img src="img/aboutIcon3.png" className="img-fluid" /></div>
              <div className="lax homeCeramic2"><img src="img/aboutIcon2.png" className="img-fluid" /></div>
              <div className="lax homeCeramic3"><img src="img/aboutIcon1.png" className="img-fluid" /></div>
            </div>
          </div>
        </div>
        <div className="lax faqBottomImg">
          <img src="img/productBottomImg.svg" className="productBottomImg" />
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
            <div className="col-xl-6 col-lg-6 col-md-6 px-sm-5">
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
      <section className="secHomeCount">
        <img src="img/count-bg.svg" />
        <div className="container-fluid">
          <div className="owl-carousel owl-theme count-carousel">
            <div className="item">
              <div className="countBox">
                <h3><span className="counting" data-count="900">0</span> +</h3>
                <h4>Lorem Ipsum simply</h4>
              </div>
            </div>
            <div className="item">
              <div className="countBox">
                <h3><span className="counting" data-count="150">0</span> +</h3>
                <h4>Lorem Ipsum simply</h4>
              </div>
            </div>
            <div className="item">
              <div className="countBox">
                <h3><span className="counting" data-count="200">0</span> +</h3>
                <h4>Lorem Ipsum simply</h4>
              </div>
            </div>
            <div className="item">
              <div className="countBox">
                <h3><span className="counting" data-count="320">0</span> +</h3>
                <h4>Lorem Ipsum simply</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <Footer />
    </main>
  )
}
