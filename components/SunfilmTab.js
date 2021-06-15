import React from 'react'
import Link from 'next/link'

const SunfilmTab = (props) => {
    console.log(props.props);
    return (
        <div>
            <nav className="category-nav">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <div className="container mb-0">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-11">
                      <div className="owl-carousel owl-theme tab-carousel">                      
                       <a className="nav-item nav-link"></a>
                       <Link href={{
                          pathname: '/windowfilm-p70',
                          query: {value:true},
                        }}
                       >
                       <a className={`nav-item nav-link ${props.sunfilmp70}`}>P - 70</a>
                          </Link>

                          <Link href={{
                          pathname: '/windowfilm-p70ws',
                          query: {value:true},
                        }}
                       > 
                       <a className={`nav-item nav-link ${props.sunfilmp70ws}`}>P - 70WS</a>
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
export default SunfilmTab;