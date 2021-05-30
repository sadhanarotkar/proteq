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
  )
}
