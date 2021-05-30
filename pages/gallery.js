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
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>  
                <div id="lightgallery">
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/gallary1.png" data-sub-html="<h4>2.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                              <a href="">
                                  <img className="img-fluid" src="img/gallary1.png" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/gallary2.png" data-sub-html="<h4>3.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                              <a href="">
                                  <img className="img-fluid" src="img/gallary2.png" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary3.png" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                              <a href="">
                                  <img className="img-fluid" src="img/gallary3.png" alt="Thumb-3"/>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary5.png" data-sub-html="<h4>M series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                          <a href="">
                              <img className="img-fluid" src="img/gallary5.png" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary5.png" data-sub-html="<h4>M series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                          <a href="">
                              <img className="img-fluid" src="img/gallary5.png" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary4.png" data-sub-html="<h4>M series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/gallary4.png" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div className="row justify-content-center lightgallery">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary4.png" data-sub-html="<h4>M series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                          <a href="">
                              <img className="img-fluid verticalImg" src="img/gallary4.png" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary5.png" data-sub-html="<h4>M series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                          <a href="">
                              <img className="img-fluid" src="img/gallary5.png" alt="Thumb-4"/>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary5.png" data-sub-html="<h4>M series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                          <a href="">
                              <img className="img-fluid" src="img/gallary5.png" alt="Thumb-4"/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                      <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-responsive="img/1-375.jpg 375, img/1-480.jpg 480, img/1.jpg 800" data-src="img/gallary1.png" data-sub-html="<h4>2.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                              <a href="">
                                  <img className="img-fluid" src="img/gallary1.png" alt="Thumb-1" />
                              </a>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/gallary2.png" data-sub-html="<h4>3.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                              <a href="">
                                  <img className="img-fluid" src="img/gallary2.png" alt="Thumb-2"/>
                              </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/gallary3.png" data-sub-html="<h4>5.0 series</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                              <a href="">
                                  <img className="img-fluid" src="img/gallary3.png" alt="Thumb-3"/>
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
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className="row justify-content-center lightgallery">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                            <a>
                                <img className="img-fluid" src="img/gallary1.png" />
                                <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                            <a>
                                <img className="img-fluid" src="img/gallary2.png"/>
                                <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                            </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                            <a>
                                <img className="img-fluid" src="img/gallary3.png"/>
                                <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                            </a>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary5.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary5.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary4.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
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
                            <img className="img-fluid" src="img/gallary4.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div> 
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary5.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary5.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 galleryLeft">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                          <a>
                            <img className="img-fluid" src="img/gallary1.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                          </a>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                          <a>
                              <img className="img-fluid" src="img/gallary2.png"/>
                              <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                          </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                          <a>
                            <img className="img-fluid" src="img/gallary3.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
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
              {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EfxU3M47jTQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/twgebilKE6U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
