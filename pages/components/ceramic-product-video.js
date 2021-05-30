import { useRouter } from "next/router";

export default function CeramicProductVideo() {
  const router = useRouter();
  return (
    <div className="secproductVideo">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 productVideoLeft">
            <h2 className="heading">Video</h2>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 productVideoRight">
            <div className="lax productVideoRightImg"><img src="img/productVideo-bg.svg" className="img-fluid" /></div>
          </div>
        </div>
        <div className="row justify-content-center productVideoWrapper">
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-10 px-lg-0">
            <div className="productVideo">
              <img src="img/galleryBanner.png" className="img-fluid" />
              <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
