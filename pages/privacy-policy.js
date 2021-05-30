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
        <title>Privacy Policy</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <Header />
      <section className="privacyBanner">
        <div className="container">
          <h1>Privacy Policy</h1>
        </div>
      </section>      
      <section className="privacyContent">        
        <div className="container">
          <div className="row mb-5">
            <div className="col-xl-4">            
            </div>
            <div className="col-xl-8">
              <p>Thank you for choosing to be part of our community at Proteq (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@proteq.co.in</p>
              <p>When you visit our website www.proteq.co.in, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.</p>
              <p>This privacy policy applies to all information collected through our website (such as www.proteq.co.in), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the "Services").</p>
              <p style={{'font-weight': 'bold'}}>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">1. WHAT INFORMATION DO WE COLLECT?</h2>              
            </div>
            <div className="col-xl-8">
              <p style={{'font-weight': 'bold'}}>Personal information you disclose to us</p>
              <p style={{'font-style': 'italic'}}><span style={{'font-weight': 'bold'}}>In Short: </span> We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information</p>
              <p>We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</p>
              <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect can include the following:</p>
              <p><span style={{'font-weight': 'bold'}}>Publicly Available Personal Information.</span> We collect first name, maiden name, last name, and nickname; phone numbers; email addresses; business email; business phone number; and other similar data.</p>
              <p><span style={{'font-weight': 'bold'}}>Credentials.</span> We collect passwords, password hints, and similar security information used for authentication and account access.</p>
              <p><span style={{'font-weight': 'bold'}}>Payment Data.</span>  We collect data necessary to process your payment.</p>
              <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">2. HOW DO WE USE YOUR INFORMATION?</h2>              
            </div>
            <div className="col-xl-8">
              <p style={{'font-style': 'italic'}}><span style={{'font-weight': 'bold'}}>In Short: </span> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent</p>
              <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
              <p>We use the information we collect or receive:</p>
              <p><span style={{'font-weight': 'bold'}}>To facilitate account creation and logon process.</span> If you choose to link your account with us to a third party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</p>
              <p><span style={{'font-weight': 'bold'}}>To send you marketing and promotional communications. </span> We and/or our third party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt-out of our marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).</p>
              <p><span style={{'font-weight': 'bold'}}>To send administrative information to you.</span>  We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</p>              
              <p><span style={{'font-weight': 'bold'}}>Fulfill and manage your orders.</span>  We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</p>
              <p><span style={{'font-weight': 'bold'}}>To post testimonials.</span>  We post testimonials on our Services that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and testimonial. If you wish to update, or delete your testimonial, please contact us at info@proteq.co.in and be sure to include your name, testimonial location, and contact information.</p>
              <p><span style={{'font-weight': 'bold'}}>Administer prize draws and competitions. </span>  We may use your information to administer prize draws and competitions when you elect to participate in competitions.</p>
              <p><span style={{'font-weight': 'bold'}}>Request Feedback.</span>  We may use your information to request feedback and to contact you about your use of our Services.</p>
              <p><span style={{'font-weight': 'bold'}}>To manage user accounts.</span> We may use your information for the purposes of managing our account and keeping it in working order.</p>
              <p><span style={{'font-weight': 'bold'}}>To deliver services to the user. </span> We may use your information to provide you with the requested service.</p>
              <p><span style={{'font-weight': 'bold'}}>To respond to user inquiries/offer support to users. </span> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>              
            </div>
            <div className="col-xl-8">
              <p style={{'font-style': 'italic'}}><span style={{'font-weight': 'bold'}}>In Short: </span> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
              <p>We may process or share data based on the following legal basis:</p>
              <p><span style={{'font-weight': 'bold'}}>Consent: </span> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</p>
              <p><span style={{'font-weight': 'bold'}}>Legitimate Interests: </span> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</p>
              <p><span style={{'font-weight': 'bold'}}>Performance of a Contract: </span>  Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</p>
              <p><span style={{'font-weight': 'bold'}}>Legal Obligations: </span>  We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</p>
              <p><span style={{'font-weight': 'bold'}}>Vital Interests: </span> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</p>
              
              <p>More specifically, we may need to process your data or share your personal information in the following situations:</p>
              <p><span style={{'font-weight': 'bold'}}>Vendors, Consultants and Other Third-Party Service Providers. </span> We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Services, which will enable them to collect data about how you interact with the Services over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</p>
              <p><span style={{'font-weight': 'bold'}}>Business Transfers. </span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
              <p><span style={{'font-weight': 'bold'}}>Third-Party Advertisers. </span> We may use third-party advertising companies to serve ads when you visit the Services. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">4. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>              
            </div>
            <div className="col-xl-8">
              <p style={{'font-style': 'italic'}}><span style={{'font-weight': 'bold'}}>In Short: </span> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</p>
              <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
              <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>              
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">5. DO WE COLLECT INFORMATION FROM MINORS?</h2>              
            </div>
            <div className="col-xl-8">
              <p style={{'font-style': 'italic'}}><span style={{'font-weight': 'bold'}}>In Short: </span> We do not knowingly collect data from or market to children under 18 years of age.</p>
              <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at info@proteq.co.in.</p>              
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">6. WHAT ARE YOUR PRIVACY RIGHTS?</h2>              
            </div>
            <div className="col-xl-8">
              <p style={{'font-style': 'italic'}}><span style={{'font-weight': 'bold'}}>In Short: </span> You may review, change, or terminate your account at any time.</p>
              <p>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/newsroom/article29/items/612080" target="_blank">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a></p>              
              <h4>Account Information</h4>
              <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
              <ul>
                <li><p>Log into your account settings and update your user account.</p></li>
                <li><p>Contact us using the contact information provided.</p></li>
              </ul>
              <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.</p>
              <p><span style={{'font-weight': 'bold'}}>Opting out of email marketing: </span> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-related emails that are necessary for the administration and use of your account. To otherwise opt-out, you may:</p>
              <ul>
                <li><p>Note your preferences when you register an account with the site.</p></li>
                <li><p>Access your account settings and update preferences.</p></li>
                <li><p>Contact us using the contact information provided.</p></li>
              </ul>
            </div>
          </div>          
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">7. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>              
            </div>
            <div className="col-xl-8">
              <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy policy.</p>              
            </div>
          </div>          
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>              
            </div>
            <div className="col-xl-8">
              <p style={{'font-style': 'italic'}}><span style={{'font-weight': 'bold'}}>In Short: </span> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
              <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>              
              <p>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
            </div>
          </div>        
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">9. DO WE MAKE UPDATES TO THIS POLICY?</h2>              
            </div>
            <div className="col-xl-8">
              <p style={{'font-style': 'italic'}}><span style={{'font-weight': 'bold'}}>In Short: </span> Yes, we will update this policy as necessary to stay compliant with relevant laws.</p>
              <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
            </div>
          </div>       
          <div className="row mb-5">
            <div className="col-xl-4">
              <h2 className="heading">10. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>              
            </div>
            <div className="col-xl-8">
              <p>If you have questions or comments about this policy, you may email us at info@proteq.co.in or by post to:</p>
            </div>
          </div>   
          <div className="row">
            <div className="col-xl-4">
              <h2 className="heading">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>              
            </div>
            <div className="col-xl-8">
              <p>Based on the laws of some countries, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, Please mail us at info@proteq.co.in. We will respond to your request within 30 days.</p>
            </div>
          </div>
        </div>
      </section>     
      <Footer />
    </main>
  )
}
