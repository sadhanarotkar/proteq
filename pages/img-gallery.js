import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Header from './components/header'
import Link from 'next/link'

export default function ImgGallery() {
  const router = useRouter()
  return (
    <main className="content">
      <Head>
        <title>Img Gallery</title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>
      <Header />
      <section className="">
        <div className="container py-5">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div id="video-gallery">
              <a href="https://www.youtube.com/watch?v=meBbDqAXago" data-poster="video-poster1.jpg" >
                  <img src="img/gallary1.png" />
              </a>
              <a href="https://vimeo.com/1084537" data-poster="video-poster2.jpg">
                  <img src="img/gallary2.png" />
              </a>

</div>

        <div style={{display: 'none'}} id="video1">
          <video className="lg-video-object lg-html5" controls preload="none">
              <source src="videos/video1.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
          </video>
        </div>
        <div style={{display: 'none'}} id="video2">
            <video className="lg-video-object lg-html5" controls preload="none">
                <source src="videos/video2.mp4" type="video/mp4" /> 
                Your browser does not support HTML5 video.
            </video>
        </div>
        
        <ul id="html5-videos">
          <li data-poster="video-poster1.jpg" data-sub-html="video caption1" data-html="#video1" >
          <img className="img-fluid" src="img/gallary1.png" alt="Thumb-1" />
          </li>
          <li data-poster="video-poster2.jpg" data-sub-html="video caption2" data-html="#video2" >
          <img className="img-fluid" src="img/gallary2.png" alt="Thumb-1" />
          </li>
        </ul>

        </div>
      </section>
    </main>
  )
}
