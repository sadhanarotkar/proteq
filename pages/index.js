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
import { useEffect, useState } from 'react'

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

const Home=()=> {
  const[isLoading,setIsLoading]=useState(true);

useEffect(()=>{
  
  setInterval( ()=>{ setIsLoading(false) }, 1000);

});

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
      { isLoading ? <Loader /> : 
      <>      
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
                    <p>We pride our business on the solid foundations of providing all with exceptional customer service, quality and honesty, revving up our fleet of extensive care & shine for your car!</p>
                    <Link href='about'><a className="btn hvr-sweep-to-right">Read More</a></Link>
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
                  <div className="col-lg-4 col-md-6 contentLeft">
                    <h2>Ceramic <span className="d-lg-none">Shield</span></h2>
                    <p>Our ceramic shield protects your vehicle for a longer duration, and will instantly give out a shiner look. The ceramic shield also speeds up the rainwater and makes it run off the windshield and car quickly.</p>
                    <Link href='ceramic'><a className="btn hvr-sweep-to-right">Read More</a></Link>
                  </div>
                  <div className="col-lg-5 col-md-6 contentCenter px-lg-5">                      
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
                  <div className="col-lg-4 col-md-6 contentLeft">
                    <h2>Microfiber <span className="d-lg-none">Cloth</span></h2>
                    <p>Proteq Microfiber Car Cloth incorporates a unique absorbent microfiber technology. This cloth removes oily or filmy residues of waxes, polishes, glaze and fingerprints.</p>
                    <Link href='microfiber-cloth'><a className="btn hvr-sweep-to-right">Read More</a></Link>
                  </div>
                  <div className="col-lg-5 col-md-6 contentCenter align-self-end px-5">                      
                    <img src="img/microfiber.png" className="img-fluid" />                    
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
                  <div className="col-xl-4 col-lg-4 col-md-6 contentRight align-self-center">
                    <h2>Paint <span>Protection Film</span></h2>
                    <p>Our Paint protection film (PPF) brings out the ability to heal swirls and scratches with heat, leaving your paint shiny and glossy. It conjointly has the flexibility to soak up impact and preserve your paint from rock chips.</p>
                    <Link href='paint-protection'><a className="btn hvr-sweep-to-right">Read More</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="item banner-item5">
            <img src="img/slide5-bg.jpg" />
            <div className="cover">
              <div className="container-fluid">
                <div className="row align-items-center align-items-center">                    
                  <div className="col-lg-5 col-md-7 contentLeft">
                    <h2>Window <span className="d-lg-none">Films</span></h2>
                    <p>Take protection on the road with you with our automotive products. Proteq's window films offer protection from the sun, flying debris, and road hazards. These protection films block 99% of the sun’s harmful UV rays, protecting your skin and reducing fading of interiors.</p>
                    <Link href='windowfilm-p70'><a className="btn hvr-sweep-to-right">Read More</a></Link>
                  </div>
                  <div className="col-lg-3 col-md-4 contentCenter px-lg-4">                      
                    <img src="img/windowbannerImg.png" className="img-fluid" />                    
                  </div>
                  <div className="col-lg-4 col-md-3 contentRight align-self-end">  
                    <h2>Films</h2>                   
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
              <img src="img/about-car-new.png" className="img-fluid aboutImg" />
            </div>
            <div className="co-xl-7 col-lg-6 col-md-6 col-sm-12 pl-md-5">
              <h1 className="heading text-white">About Proteq Autocare</h1>
              <p>When young car euthanistic entrepreneurs come together - they sure have something really amazing cooking! We build Proteq Autocare so we could turn our passion for cars into providing effective, efficient and excellent quality paint protection film (PPF) services with utmost determination and commitment to our customers.</p>
              <Link href='about'><a className="readLink text-yellow">Read More</a></Link>
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
              <p>Ceramic coating your paint is absolutely worth the price. It provides great protection against contaminants and minor scratches, all while making the vehicle much easier to clean up. Hence, we at At Proteq Autocare, provide you with Nano ceramics that comes with a ceramic shield, Glass Ceramic Sheild, Leather Ceramic Sheild, and Plastic Ceramic Shield.</p>
              <Link href='ceramic'><a className="readLink text-pink">Read More</a></Link>            
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
                  <img src="img/Vertical-S5.png" className="img-fluid" style={{transform: 'rotate(170deg)'}} />
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
              <p>We’ve found that there are a few different ways people view their cars and how they care for them, how they expect the appearance of their vehicle to be and how long they plan to keep the vehicle. The paint protection film is the best option for us to woe them with both protection and an amazing appearance.</p>
              <Link href='paint-protection'><a className="readLink text-pink">Read More</a></Link>            
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="co-xl-6 col-lg-6 col-md-5 col-sm-12">
              <div className="headShadow">
                <h1 className="headingShadow">Microfiber</h1>
                <h1 className="heading">Microfiber Cloth</h1>
              </div>
              <p>Our microfiber cloths are great for cleaning grime during professional automotive detailing. They're non-scratching, Lint-free has the ability to quickly removes dust, and retains many times their weight of water. This cloth is safe in hot water, chlorine bleach and dryer. These cloths Are not abrasive on the delicate surfaces of a vehicle but are ultra-absorbent for professional automotive detailing.</p>
              <Link href='microfiber-cloth'><a className="readLink text-pink">Read More</a></Link> 
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
                    <p>First of all, I would like to thank team Proteq. PPF application done on my Mercedes CLA professionally and with the best quality. If you love your pride and joy, I will recommend PROTEQ.</p>
                    <p className="username text-yellow">- Talib Khatri</p>
                  </div>
                </div>
                <div className='item'>
                  <div className="testimonialContent">
                    <p>Really nice guys, super helpful and polite as well. PPF application is done on my BMW and Mercedes E class fully. PROTEQ is the best place to go if you want your car to look new all the time.</p>
                    <p className="username text-yellow">- Bhavesh Bharmecha</p>
                  </div>
                </div>
                <div className='item'>
                  <div className="testimonialContent">
                    <p>I was not at all aware of the paint protection film. These guys from PROTEQ explained everything why it is important. It made me ready to get the full application on my Skoda Octavia VRS and trust me it been six months since then and still my car looks brand new like just brought from the showroom. Best investment for my car.</p>
                    <p className="username text-yellow">- Amit Abhyankar</p>
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
                <h4>Cars Protected</h4>
              </div>
            </div>
            <div className="item">
              <div className="countBox">
                <h3><span className="counting" data-count="600">0</span> +</h3>
                <h4>Happy Customers Reviews</h4>
              </div>
            </div>
            <div className="item">
              <div className="countBox">
                <h3><span className="counting" data-count="200">0</span> +</h3>
                <h4>Protect Techniques</h4>
              </div>
            </div>
            <div className="item">
              <div className="countBox">
                <h3><span className="counting" data-count="120">0</span> +</h3>
                <h4>Awards and Recognition</h4>
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
                  <h2 className="heading">THE BEST CAR SERVICE AWAITS YOU</h2>
                  <p className="mb-4">Proteq Works On Excellency To Deliver Credibility!</p>
                  <ContactUS/>
                </div>
              </div>
          </div>
        </div>
        <img src="img/contact-bottomImg.svg" className="img-fluid contactBottomImg" />
      </section>
      <Footer />
      </>}
    </main>
  )
}
export default Home;