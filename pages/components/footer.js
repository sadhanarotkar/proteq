import Link from 'next/link'
import { useRouter } from "next/router";
import Quote from '../../components/Quote';

export default function Header(props) {
  const router = useRouter();
  return (
    <footer>
      <div className="car-top default">
				<span>
          <img src="img/car.png" />
        </span>
			</div>
      <div className="footerTop">        
        <div className="container-fluid">
          <div className="footerLinks">
              <a href="about">About Proteq</a>
              <a href="gallery">Gallery</a>
              <a href="testimonials">Testimonials</a>
              <a href="contact">Contact</a>
          </div>          
          <div className="footerInfo">
            <p><span>Address:</span> L-102, Prime Mall Irla, Vile Parle (W), Mumbai - 400 056</p>
            <p><span>Phone No:</span> <Link href="tel:8422898422">+91-8422 89 8422</Link> <Link href="tel:8422988422"><a className="ml-3"> +91-8422 98 8422</a></Link></p>
            <p><span>Email:</span> <Link href="mailto:info@proteq.co.in">info@proteq.co.in</Link></p>
          </div>
          <div className="footerSocial">
            <a target="_blank" href="https://www.facebook.com/Proteq-109661883846191/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.instagram.com/proteq_ppf.car/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a target="_blank" href="https://twitter.com/proteq_ppf_car"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCZ6eCrxtUPjNONo-z64Y5vQ?view_as=subscriber"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
          </div>
          <div className="newletter">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10 col-12">
                <form>
                  <div className="form-group">
                    <h4>Subscribe Us:</h4>
                    <input type="email" className="form-control" placeholder="Your email here" />
                    <button type="button" className="btn hvr-sweep-to-right">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>            
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-md-left text-center">
              <p>Copyright©2021 www.proteq.co.in All Rights Reserved.</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-md-right text-center">
              <div className="copyrightLinks">
                <a href="terms">Terms & Conditions</a>
                <a href="privacy-policy">Privacy Policy</a>
                <Link href="/"><img src="img/whatsapp.svg" className="img-fluid" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quote selected={props.selected}/>
    </footer>
  )
}
