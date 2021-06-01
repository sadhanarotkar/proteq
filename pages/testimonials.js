import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'

export default function Testimonials() {  
  const router = useRouter()
  return (
    <main className="content">
      <Head>
        <title>Testimonials</title>
        <link rel="icon" href="img/favicon.ico" />
        <script src="js/infiniteslidev2.js"></script>  
        <script src="js/infiniteslidev2-script.js"></script>      
      </Head>
      <Loader />
      <Header />
      <section className="testimonialWrapper">
        <ul className="scrollingImg list-unstyled">
          <li>
            <img src="img/user1.png" />
            <img src="img/user11.png" />
            <img src="img/user3.png" />
            <img src="img/user4.png" />
            <img src="img/user5.png" />
            <img src="img/user6.png" />
            <img src="img/user7.png" />
            <img src="img/user8.png" />
            <img src="img/user9.png" />
            <img src="img/user10.png" />
            <img src="img/user2.png" />
            <img src="img/user5.png" />
          </li>
        </ul>
        <div className="secTestimonial">
          <div className="testimonialCard">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <h1>Testimonials</h1>
                  <p>Proteq Autocare isn't just young entrepreneurs but is definitely men who walk their talk. We've been working with our passion and thriving to work for a mission in providing premium and exceptional products in an affordable range by epitomizing safety and efficiency. Know more about our works through these testimonials.</p>
                </div>
              </div>
              <div className="card-columns pt-5">
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Talib Khatri</h6>
                    </div>
                    <p>First of all, I would like to thank team Proteq. PPF application done on my Mercedes CLA professionally and with the best quality. If you love your pride and joy, I will recommend PROTEQ.</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid"/>
                      <h6>Amit Abhaynkar</h6>
                    </div>
                    <p>I was not at all aware of the paint protection film. These guys from PROTEQ explained everything why it is important. It made me ready to get the full application on my Skoda Octavia VRS and trust me it been six months since then and still my car looks brand new like just brought from the showroom. Best investment for my car.</p>
                    <img src="img/quote.svg" className="img-fluid"/>
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Rudraksh Bahl</h6>
                    </div>
                    <p>My car is my baby, and to have it given to someone is like a major part of me. Proteq Autocare was like nannies to my baby. They handled it with care. Brand new as my car was when I first got it. Kudos to the team!</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>                
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid"/>
                      <h6>Bhavesh Bharmecha</h6>
                    </div>
                    <p>Really nice guys, super helpful and polite as well. PPF application is done on my BMW and Mercedes E class fully. PROTEQ is the best place to go if you want your car to look new all the time.</p>
                    <img src="img/quote.svg" className="img-fluid"/>
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Sumit Patil</h6>
                    </div>
                    <p>My car looks brand new again! Great attention to detail and the best part, they come to you. Proteq Autocare has by far been my greatest choice.</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Karan Nair</h6>
                    </div>
                    <p>I'm a die-hard car fan, understanding to which my passion and knowledge of cars are vast. I needed someone who would have equal knowledge or maybe more than what I understood about cars. Proteq Autocare is just the right buddy who got me all the shine and hype for my car. Definitely recommending them to all my friends.</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
