import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'

export default function Terms() {
  const router = useRouter()
  return (
    <main className="content">
      <Head>
        <title>Terms and Condition</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Header />
      <section className="privacyBanner">
        <div className="container">
          <h1>TERMS & CONDITIONS</h1>
        </div>
      </section>      
      <section className="privacyContent">        
        <div className="container">
          <div className="row mb-5">
            <div className="col-xl-4 col-lg-4">            
            </div>
            <div className="col-xl-8 col-lg-8">
              <p>Proteq Autocare is pleased to welcome you. As used in this Agreement the terms “you” and ‘your” refers to a visitor of this Site and the terms “Proteq Autocare Services”. “us”, “our” and “we” refers to Proteq Autocare Services (local verified business) and its affiliate, sister and parent concerns.</p>
              <p>Please read this Terms of Use & Privacy Policy Notice carefully before consulting this Site. By proceeding with the use of this Site or any of its links or services you will be deemed to have consented to this Terms of Use & Privacy Policy Notice.</p>
              <p>If you do not agree with this Terms of Use & Privacy Policy Notice, please close your browser window to close and not view the Site.</p>
              <p>We reserve the right, in our sole discretion, to change, modify, add or remove provisions of this Terms of Use & Privacy Policy Notice at any time.</p>
              <p>This Terms of Use & Privacy Policy Notice may be modified occasionally, so kindly check this page regularly. By using this Site after any changes are posted to this Terms of Use & Privacy Policy Notice or you are otherwise notified of such changes, you agree to accept those changes, whether or not you have reviewed them. </p>
              <p>If you do not agree to this Terms of Use & Privacy Policy Notice, you should not use the Site and you should arrange to cancel any registered user account or subscription with us.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4 col-lg-4">
              <h2 className="heading">1. Information</h2>              
            </div>
            <div className="col-xl-8 col-lg-8">
              <p>Unless otherwise specified, you are granted a non-exclusive, non-transferable, limited right to access, use and display the Website and the material provided hereon, for your personal, non-commercial use, provided that you comply fully with the provisions of this Terms of Use & Privacy Policy Notice.</p>
              <p>You also understand that the information shared with you is for your personal use only and may not be suitable or applicable to others.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4 col-lg-4">
              <h2 className="heading">2. Discontinuation Of Contract</h2>              
            </div>
            <div className="col-xl-8 col-lg-8">
              <p>In our sole discretion and without prior notice or liability, we may discontinue, modify or alter any aspect of the Site, including, but not limited to, (i) restricting the time the Site is available, (ii) restricting the amount of use permitted (iii) restricting or terminating any user's right to use the Site and/or any services, and (iv) restricting or modifying in any manner any services that are available on the Site.</p>
              <p>You agree that any termination or cancellation or modification of your access to, or use of, the Site may be effected without prior notice.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <h2 className="heading">3. Termination</h2>              
            </div>
            <div className="col-xl-8 col-lg-8">
              <p>If you do not abide by this Terms of Use & Privacy Policy Notice, except as we may otherwise provide from time to time, you agree that we may immediately stop your visit to the Site and/or bar any further access to our Site (or part thereof). </p>
              <p>Further, you agree that we shall not be liable to you or any third party for any termination or cancellation of your access to, or use of, our Site.</p>
            </div>
          </div>
        </div>
      </section>     
      <Footer />
    </main>
  )
}
