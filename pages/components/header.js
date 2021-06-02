import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [productLinks, setCount] = useState([
    '/ceramic',
    '/leather-ceramic',
    '/plastic-ceramic',
    '/glass-ceramic',
    '/paint-protection',
    '/paint-protection',
    '/paint-series3',
    '/paint-series5',
    '/paint-seriesm',
    '/microfiber-cloth',
  ]);
  const [productsActive, setProductsActive] = useState(false);

  useEffect(() => {
    let activeLink = router.pathname;
    if (productLinks.some((el) => productLinks.includes(activeLink))) {
      setProductsActive(true);
    }
  }, []);
  return (
    <div>
    <header>
      <nav className='navbar navbar-expand-lg'>
        <button
          className='navbar-toggler hamburger hamburger--boring'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>          
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
                {/* <a target='_blank' href='https://twitter.com/proteq_ppf_car'>
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a> */}
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
          <div className="overlayMenu">
            <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
              <div className="overlayTop">
                <div className="overlayLogo">
                  <img src='img/logo.svg' className='img-fluid' />
                </div>
                <div className="megamenuBtn">
                  <img src="img/benefit-next.svg" className="img-fluid" style={{transform: 'rotate(180deg)'}} />
                </div>
              </div>
              
              <ul className='navbar-nav ml-auto'>
                <li
                  className={
                    router.pathname == '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link href='/'>
                    <a  className='nav-link'>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item overlayProductItem">
                  <a className='nav-link'>Products</a>
                </li>
                <li
                  className={
                    productsActive == true
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
                            <Link href='ceramic'>
                              <a><h4>Ceramic</h4></a>
                            </Link>
                            <Link href='ceramic'><a>Ceramic Sheild</a></Link>
                            <Link href='leather-ceramic'><a>Leather Ceramic</a></Link>
                            <Link href='plastic-ceramic'><a>Plastic Ceramic</a></Link>
                            <Link href='glass-ceramic'><a>Glass Ceramic</a></Link>
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
                  <a href='/about' className='nav-link'>
                    About Us
                  </a>
                </li>
                <li
                  className={
                    router.pathname == '/gallery'
                      ? 'nav-item active'
                      : 'nav-item'
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
                    router.pathname == '/contact'
                      ? 'nav-item active'
                      : 'nav-item'
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
              <div className='overlayProductMenu'>
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
        </div>
      </nav>      
    </header>
    <ul className='list-unstyled stickyLinks'>
      <li>
        <a href='' data-toggle='modal' data-target='#quoteModal'>
          <div className='stickyLinkIcon'>
            <img src='img/sticky-info-circle.svg' />
          </div>{' '}
          Inquire Now
        </a>
      </li>
      <li>
        <a
          target='_blank'
          href='https://www.facebook.com/Proteq-109661883846191/'
        >
          <div className='stickyLinkIcon'>
            <img src='img/sticky-facebook.svg' />
          </div>{' '}
          Facebook
        </a>
      </li>
      <li>
        <a target='_blank' href='https://www.instagram.com/accounts/login/'>
          <div className='stickyLinkIcon'>
            <img src='img/sticky-instagram.svg' />
          </div>{' '}
          Instagram
        </a>
      </li>
      <li>
        <a
          target='_blank'
          href='https://www.youtube.com/channel/UCZ6eCrxtUPjNONo-z64Y5vQ?view_as=subscriber'
        >
          <div className='stickyLinkIcon'>
            <img src='img/sticky-youtube.svg' />
          </div>{' '}
          Youtube
        </a>
      </li>
    </ul>
    </div>
  );
}
