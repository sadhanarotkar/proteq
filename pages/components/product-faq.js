import Link from 'next/link'
import { useRouter } from "next/router";

export default function ProductFaq() {
  const router = useRouter();
  return (
    <section className="secFaq">
      <div className="lax faqLeftImg"><img src="img/faqText.svg" className="img-fluid" /></div>
      <div className="lax faqBottomImg"><img src="img/faqBottom.svg" className="img-fluid" /></div>
      <div className="container-fluid">
        <div className="row justify-content-end align-items-center">
          <div className="col-xl-5 col-lg-5 col-md-9">
            <h2 className="heading">Frequently Asked Questions</h2>
            <div id="accordion" className="productAccordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How soon can the vehicle be washed after coating application? <span className="icon" aria-hidden="true"></span></button>                     
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <p>We recommend a 7 days “no wash” period following the application. After this, car soap and water, rinse less, or waterless wash are all acceptable forms of washing.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Which are the surfaces areas covered under Ceramic Coating? <span className="icon" aria-hidden="true"></span></button>                      
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    <p>It depends on the package you choose to do. Ceramic Coating is majorly designed as a PAINT PROTECTION coating for metal & plastic surfaces. Though it can be applied for other surfaces also like Wheels, Windshield, Window glasses, Chrome, Interior Leather, and Fabric etc.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Is Ceramic Coating for Old Car or New Car? <span className="icon" aria-hidden="true"></span></button>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    <p>FOR BOTH. New Car needs it the most, to make it look even more beautiful and to maintain your Car clean easily & effortlessly.</p>
                    <p>Old Car is to be done if not done yet, to remove dullness & fadedness and to bring back your New Car shining & protect it further.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What is the difference between Ceramic Coating and other paint protection products? <span className="icon" aria-hidden="true"></span></button>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div className="card-body">
                    <p>There are different paint protection options available. 1. Wax. 2. Sealant. 3. Ceramic Coating. 4. Paint Protection films etc. Wax is a very temporary one like shoe Polish.</p>
                    <p>Ceramic Coating is the latest & the most advanced Nano Technology Paint Protection Coating. It is actually Silicon Dioxide (SiO2) material in liquid form. When applied on the surface, it bonds like a glass layer with the surface & cannot be removed in normal washing. The shining & protection is no match to any of the other coatings. It lasts for years if maintained well. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 pr-md-0 pl-md-5">
            <img src="img/faqRight.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
