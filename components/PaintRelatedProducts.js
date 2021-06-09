import Link from 'next/link';
import React from 'react'

 const RelatedProducts = (props) => {
     console.log(props.ceramic);
    return (
        <div>
            <section className="secRelatedProducts">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12">
                  <h1 className="heading text-center mb-5">Related Products</h1>
                  <div className="owl-carousel owl-theme relatedProduc-carousel">
                    { props.series2 && <div className='item'>
                        <Link href={{
                          pathname:'/paint-protection',
                          query:{value:true}
                        }}>
                          <a className="relatedPBox">
                            <div className="relatedPImg">
                              <div style={{transform: 'rotate(5deg)'}}>
                                <img src="img/Vertical-S2.png" />
                              </div>
                            </div>
                            <h5 className="heading">2.0 Series</h5>
                            <p>The 2.0 Paint Protection Film series comes in a Polyurethane Material with 0.17mm ± 0.02mm thickness.</p>
                          </a>
                      </Link>
                    </div>}
                   { props.series3 && <div className='item'>
                    <Link href={{
                          pathname:'/paint-series3',
                          query:{value:true}
                      }}>                        
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <div style={{transform: 'rotate(5deg)'}}>
                              <img src="img/Vertical-S3.png" />
                            </div>
                          </div>
                          <h5 className="heading">3.0 Series</h5>
                          <p>The 3.0 Paint Protection Film series comes in a Thermoplastic Polyurethane with 0.17mm ± 0.02mm thickness.</p>
                        </a>
                      </Link>
                    </div>}
                    { props.series5 && <div className='item'>
                    <Link href={{
                          pathname:'/paint-series5',
                          query:{value:true}
                      }}>                        
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <div style={{transform: 'rotate(5deg)'}}>
                              <img src="img/Vertical-S5.png" />
                            </div>
                          </div>
                          <h5 className="heading">5.0 Series</h5>
                          <p>The 5.0 Paint Protection Film series comes in a Thermoplastic Polyurethane with 0.2mm ± 0.02mm thickness.</p>
                        </a>
                      </Link>
                    </div>}
                    { props.seriesm && <div className='item'>
                    <Link href={{
                          pathname:'/paint-seriesm',
                          query:{value:true}
                      }}>                       
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <div style={{transform: 'rotate(5deg)'}}>
                              <img src="img/Vertical-P70.png" />
                            </div>
                          </div>
                          <h5 className="heading">M Series</h5>
                          <p>The M Paint Protection Film series comes in Polyurethane material with 0.15mm ± 0.02mm thickness. </p>
                        </a>
                      </Link>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default RelatedProducts;
