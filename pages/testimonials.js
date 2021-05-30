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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
              <div className="card-columns py-5">
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Rushabh Parekh</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d.</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid"/>
                      <h6>Rushabh Parekh</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d.</p>
                    <img src="img/quote.svg" className="img-fluid"/>
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid"/>
                      <h6>Rushabh Parekh</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d.</p>
                    <img src="img/quote.svg" className="img-fluid"/>
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Rushabh Parekh</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem I.</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="card testimonialCard">
                <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                  <div className="testimonialUser">
                    <img src="img/user.png" className="img-fluid" />
                    <h6>Rushabh Parekh</h6>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d.</p>
                  <img src="img/quote.svg" className="img-fluid" />
                </div>                
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Rushabh Parekh</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d.</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Rushabh Parekh</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d.</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Rushabh Parekh</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d.</p>
                    <img src="img/quote.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="card testimonialCard">
                  <div className="testimonialBox" data-aos="fade-up" data-aos-duration="1000">
                    <div className="testimonialUser">
                      <img src="img/user.png" className="img-fluid" />
                      <h6>Rushabh Parekh</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard Lorem Ipsum has been the industry’s standard d.</p>
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
