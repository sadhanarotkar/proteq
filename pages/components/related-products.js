import Link from 'next/link'
import { useRouter } from "next/router";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

export default function RelatedProducts() {
  const router = useRouter();
  return (
    <section className="secRelatedProducts">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-10 col-lg-10 col-md-12">
            <h1 className="heading text-center mb-5">Related Products</h1>
            <OwlCarousel className='owl-theme' loop margin={40} nav items={3} dots={false}>
              <div className='item'>
                <div className="relatedPBox">
                  <div className="relatedPImg">
                    <img src="img/leather-ceramic.png" />
                  </div>
                  <h5 className="heading">leather ceramic</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className='item'>
                <div className="relatedPBox">
                  <div className="relatedPImg">
                    <img src="img/Plastic-ceramic.png" />
                  </div>
                  <h5 className="heading">Plastic ceramic</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className='item'>
                <div className="relatedPBox">
                  <div className="relatedPImg">
                    <img src="img/glass-ceramic.png" />
                  </div>
                  <h5 className="heading">glass ceramic</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  )
}
