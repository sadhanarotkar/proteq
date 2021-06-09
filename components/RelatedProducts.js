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
                  
                  { props.ceramic && <div className='item'>
                      <Link href={{
                          pathname:'/ceramic',
                          query:{value:true}
                      }}>
                        <a className="relatedPBox">
                          <div className="relatedPImg">
                            <img src="img/homeProduct3.png" />
                          </div>
                          <h5 className="heading">ceramic Shield</h5>
                          <p>Who wouldn't want their car to look as good and brand new as it did the day they got it. You thoroughly wash it frequently and apply a brand new coat of wax every few months.</p>
                        </a>
                      </Link>
                    </div>}
                   { props.leather && <div className='item'>
                   <Link href={{
                          pathname:'/leather-ceramic',
                          query:{value:true}
                      }}>                        
                      <a className="relatedPBox">
                          <div className="relatedPImg">
                            <img src="img/leather-ceramic.png" />
                          </div>
                          <h5 className="heading">leather ceramic</h5>
                          <p>Infused with Patent-Pending Ceramic Glow Technology, with Features That Act as an Application Aid Allowing Users or Professionals</p>
                        </a>
                      </Link>
                    </div>}
                    { props.plastic && <div className='item'>
                    <Link href={{
                          pathname:'/plastic-ceramic',
                          query:{value:true}
                      }}>                        
                      <a className="relatedPBox">
                          <div className="relatedPImg">
                            <img src="img/Plastic-ceramic.png" />
                          </div>
                          <h5 className="heading">Plastic ceramic</h5>
                          <p>Plastic products, due to their durability, safety, and low manufacturing cost, are now rapidly replacing cookware items traditionally made of glass and ceramics.</p>
                        </a>
                      </Link>
                    </div>}
                    { props.glass && <div className='item'>
                    <Link href={{
                          pathname:'/glass-ceramic',
                          query:{value:true}
                      }}>                       
                       <a className="relatedPBox">
                          <div className="relatedPImg">
                            <img src="img/glass-ceramic.png" />
                          </div>
                          <h5 className="heading">glass ceramic</h5>
                          <p>Having glass that is clean and clear is essential for driving to give you the best visibility possible, which is especially important during bad weather.</p>
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
