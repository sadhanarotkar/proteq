import Link from 'next/link'
import { useRouter } from "next/router";
import Quote from '../../components/Quote';
import SidebarContact from '../../components/SidebarContact';

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
              <Link href='/about'><a>About Proteq</a></Link>
              <Link href='/gallery'><a>Gallery</a></Link>
              <Link href='/training'><a>Training</a></Link>
              <Link href='/testimonials'><a>Testimonials</a></Link>
              <Link href='/contact'><a>Contact</a></Link>
          </div>          
          <div className="footerInfo">
            <p><span>Address:</span> L-102, Prime Mall Irla, Vile Parle (W), Mumbai - 400 056</p>
            <p><span>Phone No:</span> <Link href="tel:8422898422">+91-8422 89 8422</Link> <Link href="tel:8422988422"><a className="ml-3"> +91-8422 98 8422</a></Link></p>
            <p><span>Email:</span> <Link href="mailto:info@proteq.co.in">info@proteq.co.in</Link></p>
          </div>
          <div className="footerSocial">
            <a target="_blank" href="https://www.facebook.com/Proteq-109661883846191/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.instagram.com/accounts/login/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            {/* <a target="_blank" href="https://twitter.com/proteq_ppf_car"><i className="fa fa-twitter" aria-hidden="true"></i></a> */}
            <a target="_blank" href="https://www.youtube.com/channel/UCZ6eCrxtUPjNONo-z64Y5vQ?view_as=subscriber"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
          </div>
          <div className="newletter">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10 col-12">
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
          <div className="brochuresBox">
            <h4>Corporate Profile:</h4>
            <div className="brochuresBoxLinks">
              <a href="pdf/Brochure-Cermaic-Shield-Family.pdf" className="btn hvr-sweep-to-right" target="_blank">Ceramic Shield Family</a>
              <a href="pdf/Brochures-Paint-Protection-Film.pdf" className="btn hvr-sweep-to-right" target="_blank">Paint Protection Film</a>
              <a href="pdf/Brochures-P70.pdf" className="btn hvr-sweep-to-right" target="_blank">P70</a>
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
                <Link href='/terms'><a>Terms & Conditions</a></Link>
                <Link href='/privacy-policy'><a>Privacy Policy</a></Link>
                <a href="https://api.whatsapp.com/message/F5HPNO7SETSEO1" target="_blank"><img src="img/whatsapp.svg" className="img-fluid" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quote selected={props.selected}/>
      <SidebarContact />
    </footer>
  )
}
