import React from 'react'
import Link from 'next/link'

const PaintTab = (props) => {
    console.log(props.props);
    return (
        <div>
            <nav className="category-nav">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <div className="container mb-0">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-11">
                      <div className="owl-carousel owl-theme tab-carousel">
                       <Link href={{
                          pathname: '/paint-protection',
                          query: {value:true},
                        }}
                       >
                       <a className={`nav-item nav-link ${props.series2}`}>2.0 series</a>
                          </Link>

                          <Link href={{
                          pathname: '/paint-series3',
                          query: {value:true},
                        }}
                       > 
                       <a className={`nav-item nav-link ${props.series3}`}>3.0 Series</a>
                          </Link>
                          <Link href={{
                          pathname: '/paint-series5',
                          query: {value:true},
                        }}
                       > 
                          <a className={`nav-item nav-link ${props.series5}`}>5.0 Series</a>
                          </Link>
                          <Link href={{
                          pathname: '/paint-seriesm',
                          query: {value:true},
                        }}
                       > 
                          <a  className={`nav-item nav-link ${props.seriesm}`}>M series</a>
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
export default PaintTab;