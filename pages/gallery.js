import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'

const Gallery=()=> {
  const router = useRouter()

  const pause=(e)=>{
    console.log(e);
    
    var myVideo = document.getElementById(e);
    myVideo.pause();
    
  };
  const play =(e)=>{
    var myVideo = document.getElementById(e);
    myVideo.play();
  };
    
  return (
    <main className="content">
      <Head>
        <title>Gallery</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      
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
                <a className="nav-item nav-link" id="nav-training-tab" data-toggle="tab" href="#nav-training" role="tab" aria-controls="nav-training" aria-selected="false">Training Program</a>
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
                  <div className="loadmore load1">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img1.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img1.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img2.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img2.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img4.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img4.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img3.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img3.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img5.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img5.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img6.jpeg">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img6.jpeg"/>
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
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img7.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img8.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img8.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img9.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img9.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img10.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img10.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img11.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img11.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img12.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img12.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  <div className="loadmore load2">
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
                                    <img className="img-fluid" src="img/galleryImgs/img14.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img15.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img15.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img16.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img16.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img17.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img17.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img18.jpeg">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img18.jpeg"/>
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
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img19.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img20.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img20.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img21.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img21.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img22.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img22.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img23.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img23.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img24.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img24.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  <div className="loadmore load3">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img25.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img25.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img26.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img26.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img27.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img27.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img28.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img28.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img29.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img29.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img30.jpeg">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img30.jpeg"/>
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
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img31.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img32.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img32.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img33.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img33.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img34.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img34.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img35.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img35.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img36.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img36.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div> 
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  <div className="loadmore load4">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img37.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img37.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img38.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img38.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img39.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img39.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img40.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img40.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img41.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img41.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img42.jpeg">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img42.jpeg"/>
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
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img43.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img44.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img44.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img45.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img45.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img46.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img46.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img47.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img47.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img48.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img48.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div> 
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  <div className="loadmore load5">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img49.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img49.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img50.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img50.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img51.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img51.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img52.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img52.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img53.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img53.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img54.jpeg">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img54.jpeg"/>
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
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img55.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img56.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img56.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img57.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img57.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img58.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img58.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img59.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img59.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img60.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img60.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div> 
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  <div className="loadmore load6">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img61.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img61.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img62.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img62.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img63.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img63.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img64.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img65.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img66.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img66.jpg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img67.jpeg">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img67.jpg"/>
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
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img68.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img69.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img69.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img70.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img70.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img71.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img71.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img72.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img72.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img73.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img73.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div> 
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  <div className="loadmore load7">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img74.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img74.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img75.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img75.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img76.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img76.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img77.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img77.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img78.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img78.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img79.jpeg">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img79.jpeg"/>
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
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img80.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img81.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img81.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img82.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img82.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img83.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img83.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img85.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img85.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img84.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img84.jpeg"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div> 
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  <div className="loadmore load8">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img89.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img89.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img90.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img90.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img88.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img88.jpeg"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img86.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img86.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img87.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img87.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img91.jpeg">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img91.jpeg"/>
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
                                <img className="img-fluid verticalImg" src="img/galleryImgs/img80.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img81.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img81.jpeg"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img82.jpeg">
                            <a href="">
                                <img className="img-fluid" src="img/galleryImgs/img82.jpeg"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img83.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img83.jpeg" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/galleryImgs/img85.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img85.jpeg"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img84.jpeg">
                                <a href="">
                                    <img className="img-fluid" src="img/galleryImgs/img84.jpg"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div> 
                  </div>                
                </div>
              </div>
              <div className="tab-pane fade" id="nav-videos" role="tabpanel" aria-labelledby="nav-videos-tab">
                <div className="row justify-content-center text-center mb-md-5">
                  <div className="col-xl-8 col-lg-8 col-md-12">
                    <p>Pictures don’t pay justice, and at times videos spill fun too!<br></br> You can also check out our amazing work through these videos.</p>
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
                <div className="row justify-content-center lightgallery">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">                            
                          <a>
                              <img className="img-fluid" src="img/Kia-Sonet-Proteq-PPF-Installation.jpg"/>
                              <button className="playBtn" data-toggle="modal" data-target="#videoModal16"><img src="img/play-button.svg" /></button>
                          </a>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item">
                            
                        <a>
                            <img className="img-fluid" src="img/Kia-Sonet-Proteq-PPF-Installation.jpg"/>
                            <button className="playBtn" data-toggle="modal" data-target="#videoModal17"><img src="img/play-button.svg" /></button>
                        </a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                            <a>
                                <img className="img-fluid" src="img/Kia-Sonet-Proteq-PPF-Installation.jpg"/>
                                <button className="playBtn" data-toggle="modal" data-target="#videoModal15"><img src="img/play-button.svg" /></button>
                            </a>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                          <img className="img-fluid" src="img/day1.jpg" />
                          <button className="playBtn" data-toggle="modal" data-target="#videoModal13"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item">
                        <a>
                          <img className="img-fluid" src="img/Audi-Q2-Proteq-Paint-Protection-Film-Application.jpg"/>
                          <button className="playBtn" data-toggle="modal" data-target="#videoModal14"><img src="img/play-button.svg" /></button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight"></div>
                </div>
                {/* <div className="text-center my-5">
                  <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                </div>  */}
              </div>
              <div className="tab-pane fade" id="nav-training" role="tabpanel" aria-labelledby="nav-training-tab">
              <div className="row justify-content-center text-center mb-md-5">
                  <div className="col-xl-8 col-lg-8 col-md-12">
                    <p>Proteq also offers their best of training programs in getting your skill-sets and <br></br>automotive passion on hands with industries best understood knowledge! </p>
                  </div>
                </div>  
                <div id="lightgallery">
                  <div className="loadmore load1">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img2.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img2.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img3.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img3.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img6.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img6.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img4.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img4.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img5.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img5.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img1.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day1/img1.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img7.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day1/img7.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img8.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img8.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img9.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img9.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img10.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img10.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img11.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img11.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img15.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img15.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  <div className="loadmore load2">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img16.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img16.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img17.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img17.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img19.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img19.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img13.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img13.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img14.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img14.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img18.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day1/img18.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img20.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day1/img20.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/img21.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img21.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img22.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img22.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img23.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img23.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img24.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img24.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img25.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img25.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>
                  
                  <div className="loadmore load3">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img26.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img26.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day1/img27.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img27.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img28.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day1/img28.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img29.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img29.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img30.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img30.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img32.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day1/img32.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img33.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day1/img33.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day1/img32.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img32.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day1/img33.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day1/img33.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img1.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img1.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img2.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img2.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img3.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img3.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load4">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img4.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img4.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img5.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img5.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img6.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img6.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img7.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img7.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img8.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img8.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img9.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img9.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img10.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img10.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day2/img11.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img11.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img12.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img12.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img13.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img13.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img14.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img14.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img15.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img15.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load5">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img16.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img16.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img17.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img17.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img18.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img18.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img19.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img19.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img20.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img20.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img21.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img21.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img22.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img22.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day2/img23.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img23.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img24.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img24.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img25.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img25.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img26.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img26.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img27.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img27.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load6">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img28.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img28.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img29.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img29.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img30.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img30.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img31.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img31.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img32.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img32.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img33.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img33.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img34.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img34.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day2/img35.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img35.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img36.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img36.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img37.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img37.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img38.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img38.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img39.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img39.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load7">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img40.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img40.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img41.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img41.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img42.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img42.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img43.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img43.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img44.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img44.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img45.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img45.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img46.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img46.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day2/img47.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img47.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img48.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img48.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img49.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img49.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img50.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img50.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img51.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img51.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load8">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img52.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img52.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img53.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img53.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img54.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img54.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img55.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img55.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img56.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img56.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img57.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img57.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img58.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img58.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day2/img59.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img59.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img60.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img60.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img61.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img61.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img62.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img62.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img63.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img63.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load9">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img64.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img64.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img65.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img65.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img66.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img66.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img67.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img67.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img68.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img68.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img69.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img69.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img70.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img70.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day2/img71.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img71.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img72.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img72.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img73.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img73.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img74.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img74.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img75.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img75.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load10">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img76.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img76.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day2/img77.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img77.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img78.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day2/img78.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img79.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img79.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img80.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img80.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img81.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img81.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img82.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day2/img82.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day2/img83.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img83.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day2/img84.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day2/img84.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img1.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img1.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img2.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img2.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img3.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img3.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load11">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img4.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img4.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img5.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img5.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img6.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img6.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img7.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img7.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img8.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img8.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img9.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img9.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img10.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img10.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day3/img11.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img11.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img12.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img12.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img13.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img13.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img14.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img14.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img15.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img15.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load12">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img16.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img16.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img17.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img17.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img18.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img18.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img19.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img19.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img20.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img20.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img21.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img21.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img22.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img22.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day3/img23.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img23.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img24.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img24.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img25.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img25.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img26.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img26.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img27.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img27.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load13">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img28.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img28.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img29.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img29.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img30.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img30.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img31.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img31.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img32.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img32.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img33.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img33.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img34.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img34.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day3/img35.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img35.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img36.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img36.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img37.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img37.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img38.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img38.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img39.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img39.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load14">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img40.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img40.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img41.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img41.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img42.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img42.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img43.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img43.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img44.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img44.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img45.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img45.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img46.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img46.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/galleryImgs/day3/img47.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img47.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img48.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img48.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img49.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img49.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img50.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img50.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img51.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img51.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>                     
                    </div>              
                    <div className="text-center my-5">
                      <button type="button" className="btn hvr-sweep-to-right btn-load">Load More</button>
                    </div>
                  </div>

                  <div className="loadmore load15">
                    <div className="row justify-content-center lightgallery">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 galleryLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img52.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img52.JPG" />
                                </a>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 item" data-src="img/trainingImgs/day3/img53.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img53.JPG"/>
                                </a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img54.JPG">
                                <a href="">
                                    <img className="img-fluid" src="img/trainingImgs/day3/img54.JPG"/>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryMiddle">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img55.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img55.JPG"/>
                            </a>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img56.JPG">
                            <a href="">
                                <img className="img-fluid" src="img/trainingImgs/day3/img56.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 galleryRight">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 item" data-src="img/trainingImgs/day3/img58.JPG">
                            <a href="">
                                <img className="img-fluid verticalImg" src="img/trainingImgs/day3/img58.JPG"/>
                            </a>
                          </div>
                        </div>
                      </div> 
                    </div>                    
                  </div>
                </div>
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
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/twgebilKE6U" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video1'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video1" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video1.mp4" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video2'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video2" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video2.mp4" type="video/mp4"/>
              </video>               
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video3'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video3" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video3.mp4" type="video/mp4"/>
              </video>  
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video4'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video4" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video4.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video5'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video5" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video5.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video6'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video6" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video6.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal7" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video7'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video7" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video7.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal8" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video8'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video8" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video8.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal9" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video9'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video9" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video9.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal10" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video10'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video10" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video10.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal11" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video11'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video11" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video10.mp4" type="video/mp4"/>
              </video>              
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal12" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video12'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video12" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/video10.mp4" type="video/mp4"/>
              </video> 
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal13" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video13'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video13" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/day1.mp4" type="video/mp4"/>
              </video> 
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal14" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video14'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video14" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/Audi-Q2-Proteq-Paint-Protection-Film-Application.mp4" type="video/mp4"/>
              </video> 
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal15" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video15'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video15" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/Kia-Sonet-Proteq-PPF-Installation.mp4" type="video/mp4"/>
              </video> 
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal16" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video16'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video16" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/Lamborghini-Proteq-PPF-Installation.mp4" type="video/mp4"/>
              </video> 
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade fullModal" id="videoModal17" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" onClick={((e) => pause('video17'))} className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <video id="video17" width="100%" height="100%" controls>
                <source src="https://proteq.wdipl.com/backend/videos/Volkswagen-Troc-Proteq-PPF-Application.mp4" type="video/mp4"/>
              </video> 
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Gallery;
