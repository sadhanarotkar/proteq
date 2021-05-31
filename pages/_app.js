import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" crossorigin="anonymous"></link>
<link rel="stylesheet" href="css/animate.min.css"/>
<link rel="stylesheet" href="css/lightgallery.css"/>
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" /> */}
<link rel="stylesheet" href="css/aos.css"/>
<link rel="stylesheet" href="css/owl.carousel.min.css" />
<link rel="stylesheet" href="css/owl.theme.default.min.css" />
<script src='js/jquery-3.2.1.min.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="js/bootstrap.min.js" crossorigin="anonymous"></script>
{/* <script src="js/jquery.parallax-scroll.js"></script> */}
<script src="js/aos.js" ></script>
<script src="js/lax.js" ></script>
<script src="js/picturefill.min.js"></script>
<script src="js/lightgallery.js"></script>
<script src="js/lg-fullscreen.js"></script>
<script src="js/lg-zoom.js"></script>
<script src="js/lg-hash.js"></script>
{/* <script src="js/lg-video.min.js"></script>
<script src="http://vjs.zencdn.net/4.12/video.js"></script> */}
{/* <script src="https://cdn.rawgit.com/sachinchoolur/lg-share.js/master/dist/lg-share.js"></script> */}
<script src="js/owl.carousel.js"></script>
<script src="js/custom.js"></script>



</Head>
    <div className="blobs">
      <div className="blob-center"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      {/* <img className="img-fluid" src="img/logo-loader.svg" /> */}
    </div>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
