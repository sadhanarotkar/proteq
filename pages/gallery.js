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
                            <img className="img-fluid" src="img/gallary5.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal5"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary4.png"/>
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
                            <img className="img-fluid" src="img/gallary4.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal7"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div> 
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary5.png"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal8"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                            <img className="img-fluid" src="img/gallary5.png"/>
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
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/twgebilKE6U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video1.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video2.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video3.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video4.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video5.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video6.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal7" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video7.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal8" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video8.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal9" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video9.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal10" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="videos/video10.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
