import Link from 'next/link'
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

export default function ProductTestimonial() {
  const router = useRouter();
  return (
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
  )
}
