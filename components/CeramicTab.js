import Link from 'next/link';
import React from 'react'

 const CeramicTab = (props) => {
    return (
        <div>
             <nav className="category-nav">            
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <div className="container mb-0">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-11">
                      <div className="owl-carousel owl-theme tab-carousel">
                       <Link  href={{
                          pathname: '/ceramic',
                          query: {value:true},
                        }}> 
                       <a className={`nav-item nav-link ${props.shield}`}>Ceramic shield</a>
                       </Link>
                       <Link  href={{
                          pathname: '/leather-ceramic',
                          query: {value:true},
                        }}  
                       >
                           <a className={`nav-item nav-link ${props.leather}`}>leather ceramic</a>
                           </Link>
                       <Link href={{
                          pathname: '/plastic-ceramic',
                          query: {value:true},
                        }}
                        >
                           <a  className={`nav-item nav-link ${props.plastic}`}>Plastic ceramic</a>
                           </Link>
                       <Link href={{
                          pathname: '/glass-ceramic',
                          query: {value:true},
                        }}>
                           <a  className={`nav-item nav-link ${props.glass}`}>glass ceramic</a>
                           </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        </div>
    )
}
export default CeramicTab;