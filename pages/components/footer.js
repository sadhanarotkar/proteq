import axios from 'axios';
import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from 'react';
import Quote from '../../components/Quote';
import SidebarContact from '../../components/SidebarContact';

const Header = (props) => {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubscribe = (event) =>{
    event.preventDefault();
    setIsLoading(true);
  const email = event.target.email.value
  event.target.reset();
  axios.post('https://proteq.co.in:8444/backend/api/subscribers', {
    email: email
    })
    .then(function (response) {
      console.log(response);
      setIsLoading(false);
      setIsSent(true);
      setTimeout(()=>
        { setIsSent(false);}, 3000);
    })
    .catch(function (error) {
      console.log(error);
      setIsLoading(false);
        setError(true);
        setTimeout(()=>
        { setError(false);}, 3000);
    });
  console.log(email);
  }
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
            <a target="_blank" href="https://instagram.com/proteq.autocare?utm_medium=copy_link"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            {/* <a target="_blank" href="https://twitter.com/proteq_ppf_car"><i className="fa fa-twitter" aria-hidden="true"></i></a> */}
            <a target="_blank" href="https://www.youtube.com/channel/UCZ6eCrxtUPjNONo-z64Y5vQ?view_as=subscriber"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
          </div>
          <div className="newletter">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10 col-12">
                <form onSubmit={onSubscribe}>
                  <div className="form-group">
                    <h4>Subscribe Us:</h4>
                    <input type="email" name="email" className="form-control" placeholder="Your email here" required />
                    <button type="submit" className="btn hvr-sweep-to-right">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>   
            
            {isLoading && <div>
              <p className="py-2 text-white">Sending Mail...</p>
          </div>}
           { isSent && <p className="my-2 text-white" role="alert"> Mail sent sucessfully.</p> }
              { error && <p className="my-2 text-white" role="alert"> Something went wrong.</p> }           
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
                <a href="https://api.whatsapp.com/message/F5HPNO7SETSEO1" target="_blank" style={{opacity: '1'}}><img src="img/whatsapp.svg" className="img-fluid" /></a>
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
export default Header;