import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <div>
    <header>
      <nav className='navbar navbar-expand-lg'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <a href='/' className='navbar-brand'>
          <img src='img/logo.svg' className='img-fluid' />
        </a>
        <div className='headerRight'>
          <div className='topbar'>
            <ul className='list-unstyled'>
              <li className='socialLinks'>
                <a
                  target='_blank'
                  href='https://www.facebook.com/Proteq-109661883846191/'
                >
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
                <a
                  target='_blank'
                  href='https://www.instagram.com/proteq_ppf.car/'
                >
                  <i className='fa fa-instagram' aria-hidden='true'></i>
                </a>
                <a target='_blank' href='https://twitter.com/proteq_ppf_car'>
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>
                <a
                  target='_blank'
                  href='https://www.youtube.com/channel/UCZ6eCrxtUPjNONo-z64Y5vQ?view_as=subscriber'
                >
                  <i className='fa fa-youtube-play' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <Link href='tel:8422898422'>+91-8422 89 8422</Link>
              </li>
              <li>
                <Link href='tel:8422898422'>+91-8422 98 8422</Link>
              </li>
            </ul>
          </div>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
            <ul className='navbar-nav ml-auto'>
              <li
                className={
                  router.pathname == '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <a href='/' className='nav-link'>
                  Home
                </a>
              </li>
              <li
                className={
                  router.pathname == '/products'
                    ? 'nav-item dropdown active'
                    : 'nav-item dropdown'
                }
              >
                <a
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Products
                </a>
                <div
                  className='dropdown-menu container'
                  aria-labelledby='navbarDropdown'
                >
                  <div className='row'>
                    <div className='col-lg-4'>
                      <div className='headProductImg'>
                        <img src='img/homeProduct1.png' className='img-fluid' />
                        <a href='about'>
                          <h4 className='heading'>Proteq Autocare <img src="img/about-next.svg" /></h4>
                        </a>
                      </div>
                    </div>
                    <div className='col-lg-8'>
                      <ul className='list-unstyled megaList'>
                        <li>
                          <a href='ceramic'>
                            <h4>Ceramic</h4>
                          </a>
                          <a href='ceramic'>Ceramic Sheild</a>
                          <a href='leather-ceramic'>Leather Ceramic</a>
                          <a href='plastic-ceramic'>Plastic Ceramic</a>
                          <a href='glass-ceramic'>Glass Ceramic</a>
                        </li>
                        <li>
                          <a href='paint-protection'>
                            <h4>Paint Protection Film</h4>
                          </a>
                          <a href='paint-protection'>2.0 Series</a>
                          <a href='paint-series3'>3.0 Series</a>
                          <a href='paint-series5'>5.0 Series</a>
                          <a href='paint-seriesm'>M Series</a>
                        </li>
                        <li>
                          <a href='microfiber-cloth'>
                            <h4>Microfiber Cloth</h4>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={
                  router.pathname == '/about' ? 'nav-item active' : 'nav-item'
                }
              >
                <a href='about' className='nav-link'>
                  About Us
                </a>
              </li>
              <li
                className={
                  router.pathname == '/gallery' ? 'nav-item active' : 'nav-item'
                }
              >
                <a href='gallery' className='nav-link'>
                  Gallery
                </a>
              </li>
              <li
                className={
                  router.pathname == '/testimonials'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <a href='testimonials' className='nav-link'>
                  Testimonials
                </a>
              </li>
              <li
                className={
                  router.pathname == '/contact' ? 'nav-item active' : 'nav-item'
                }
              >
                <a href='contact' className='nav-link'>
                  Contact
                </a>
              </li>
              <li className='nav-item btnGetQuote'>
                <a
                  className='nav-link'
                  data-toggle='modal'
                  data-target='#quoteModal'
                >
                  Get A Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    </header>
    <ul className="list-unstyled stickyLinks">
      <li><a href="" data-toggle="modal" data-target="#quoteModal"><div className="stickyLinkIcon"><img src="img/sticky-info-circle.svg" /></div> Inquire Now</a></li>
      <li><a target="_blank" href="https://www.facebook.com/Proteq-109661883846191/"><div className="stickyLinkIcon"><img src="img/sticky-facebook.svg" /></div> Facebook</a></li>
      <li><a target="_blank" href="https://www.instagram.com/accounts/login/"><div className="stickyLinkIcon"><img src="img/sticky-instagram.svg" /></div> Instagram</a></li>
      <li><a target="_blank" href="https://twitter.com/proteq_ppf_car"><div className="stickyLinkIcon"><img src="img/sticky-twitter.svg" /></div> Twitter</a></li>
      <li><a target="_blank" href="https://www.youtube.com/channel/UCZ6eCrxtUPjNONo-z64Y5vQ?view_as=subscriber"><div className="stickyLinkIcon"><img src="img/sticky-youtube.svg" /></div> Youtube</a></li>
    </ul>
    </div>
  );
}
