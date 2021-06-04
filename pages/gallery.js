import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'

export default function Gallery() {
  const router = useRouter()
  return (
    <main className="content">
      <Head>
        <title>Gallery</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Loader />
      <Header />
      <div className="galleryWrapper">
        <section className="galleryBanner">
          <h1>Gallery</h1>
          <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
        </section>
        <section className="secGallery">
          <div className="lax galleryLeftImg"><img src="img/contactFormLeft.svg" className="img-fluid" /></div>
          <div className="lax galleryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
          <div className="container-fluid">
            <nav>
              <div className="nav nav-tabs gallery-tabs justify-content-center" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-images-tab" data-toggle="tab" href="#nav-images" role="tab" aria-controls="nav-images" aria-selected="true">Images</a>
                <a className="nav-item nav-link" id="nav-videos-tab" data-toggle="tab" href="#nav-videos" role="tab" aria-controls="nav-videos" aria-selected="false">Videos</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-images" role="tabpanel" aria-labelledby="nav-images-tab">
                <div className="row justify-content-center text-center mb-md-5">
                  <div className="col-xl-8 col-lg-8 col-md-12">
                    <p>Check out all of our amazing products and services. <br></br> You can also go through videos of our customers car servicing and blush!</p>
                  </div>
                </div>  
                <div id="lightgallery">
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img1.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img1.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img2.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img2.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img4.jpeg" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img4.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img3.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img3.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img5.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img5.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img6.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img6.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img7.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img7.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img8.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img8.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img9.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img9.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img10.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img10.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img11.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img11.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img12.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img12.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>                     
                  </div>              
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img13.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img1.jpeg" alt="Thumb-13" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img14.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img14.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img15.jpeg" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img15.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img16.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img16.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img17.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img17.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img18.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img18.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img19.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img19.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img20.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img20.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img21.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img21.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img22.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img22.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img23.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img23.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img24.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img24.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>                     
                  </div>              
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img25.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img25.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img26.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img26.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img27.jpeg" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img27.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img28.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img28.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img29.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img29.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img30.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img30.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img31.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img31.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img32.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img32.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img33.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img33.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img34.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img34.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img35.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img35.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img36.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img36.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>                     
                  </div> 
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img37.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img37.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img38.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img38.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img39.jpeg" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img39.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img40.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img40.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img41.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img41.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img42.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img42.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>             
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img43.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img43.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img44.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img44.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img45.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img45.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img46.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img46.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img47.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img47.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img48.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img48.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>                     
                  </div> 
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img49.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img49.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img50.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img50.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img51.jpeg" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img51.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img52.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img52.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img53.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img53.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img54.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img54.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>  
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img55.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img55.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img56.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img56.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img57.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img57.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img58.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img58.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img59.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img59.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img60.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img60.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>                     
                  </div> 
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img61.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img61.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img62.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img62.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img63.jpeg" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img63.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img64.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img65.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img66.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img66.jpg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img67.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img67.jpg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>  
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img68.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img68.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img69.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img69.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img70.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img70.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img71.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img71.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img72.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img72.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img73.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img73.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>                     
                  </div> 
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img74.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img74.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img75.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img75.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img76.jpeg" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img76.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img77.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img77.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img78.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img78.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img79.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img79.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>  
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img80.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img80.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img81.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img81.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img82.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img82.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img83.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img83.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img85.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img85.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img84.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img84.jpeg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>                     
                  </div> 
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img89.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img89.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img90.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img90.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img88.jpeg" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img88.jpeg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img86.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img86.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img87.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img87.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img91.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img91.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>  
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img80.jpeg">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/galleryImgs/img80.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img81.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img81.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img82.jpeg">
                          <a href="">
                              <img className="img-fluid" src="img/galleryImgs/img82.jpeg" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img83.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img83.jpeg" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img85.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img85.jpeg" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img84.jpeg">
                              <a href="">
                                  <img className="img-fluid" src="img/galleryImgs/img84.jpg" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>                     
                  </div> 
                  {/* <div className="text-center my-5">
                    <button type="button" className="btn hvr-fade">Load More</button>
                  </div>                   */}
                </div>
              </div>
              <div className="tab-pane fade" id="nav-videos" role="tabpanel" aria-labelledby="nav-videos-tab">
              <div className="row justify-content-center text-center mb-md-5">
                  <div className="col-xl-8 col-lg-8 col-md-12">
                    <p>Check out all of our amazing products and services. <br></br>You can also go through videos of our customers car servicing and blush!</p>
                  </div>
                </div>
                <div className="row justify-content-center lightgallery">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                            <a>
                              <img className="img-fluid" src="img/gallary1.png" />
                              <button className="playBtn" data-toggle="modal" data-target="#videoModal1"><img src="img/play-button.svg" /></button>
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                            <a>
                                <img className="img-fluid" src="img/gallary2.png"/>
                                <button className="playBtn" data-toggle="modal" data-target="#videoModal2"><img src="img/play-button.svg" /></button>
                            </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                            <a>
                                <img className="img-fluid" src="img/gallary3.png"/>
                                <button className="playBtn" data-toggle="modal" data-target="#videoModal3"><img src="img/play-button.svg" /></button>
                            </a>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary5.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal4"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary6.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal5"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary7.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal6"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div> 
                </div>
                <div className="row justify-content-center lightgallery">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary8.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal7"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div> 
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary9.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal8"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary10.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal9"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 galleryLeft">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                          <a>
                            <img className="img-fluid" src="img/gallary1.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal10"><img src="img/play-button.svg" /></button>
                          </a>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                          <a>
                              <img className="img-fluid" src="img/gallary2.png"/>
                              <button className="playBtn" data-toggle="modal" data-target="#videoModal11"><img src="img/play-button.svg" /></button>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                          <a>
                            <img className="img-fluid" src="img/gallary3.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal12"><img src="img/play-button.svg" /></button>
                          </a>
                        </div>
                    </div>
                  </div>                     
                </div>              
                {/* <div className="text-center my-5">
                  <button type="button" className="btn hvr-fade">Load More</button>
                </div>  */}
              </div>
            </div>
          </div>      
        </section>        
      </div>
      <Footer />
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/twgebilKE6U" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video1.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video2.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video3.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video4.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video5.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video6.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal7" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video7.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal8" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video8.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal9" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video9.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal10" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://proteq.wdipl.com/backend/videos/video10.mp4" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
