import React, { useState }  from 'react';
import axios from 'axios';

const ContactUsCommon = () => {

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



    const sendContactForm = async event =>{
        event.preventDefault();
      
        const contactDetails ={
          fullname: event.target.fullname.value,
          email:event.target.email.value,
          phone:event.target.phone.value,
          message:event.target.message.value,
          page:'0',

        }
        event.target.reset();
      
        try{
          setIsLoading(true);

          const res = await axios.post('https://proteq.wdipl.com/backend/api/contact-us', {
            contactDetails,
          
        })
        console.log(res.data)
        setIsLoading(false);
        setIsSent(true);
        setTimeout(()=>
          { setIsSent(false);}, 3000);
      
        }catch(error){
          console.log(error);
          setIsLoading(false);
          setError(true);
          setTimeout(()=>
          { setError(false);}, 3000);
        } 
      }

    return (
        <div>

         {isLoading && <div>
            <h3>Sending Mail...</h3>
          </div>}

         { isSent && <div className="alert alert-success" role="alert">
                Mail sent sucessfully.
              </div>}
              { error && <div className="alert alert-danger" role="alert">
                Something went wrong.
              </div>}
            <form onSubmit={sendContactForm}>
                    <div className="form-group">
                      <input name="fullname"  type="text" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                      <input name="email" type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <input name="phone" type="text" className="form-control" placeholder="Phone Number" required />
                    </div>
                    <div className="form-group">
                      <textarea name="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                    </div>
                    <div className="text-right mt-4">
                      <button type="submit" className="btn hvr-sweep-to-right">Submit</button>
                    </div>
                  </form>
        </div>
    );
};

export default ContactUsCommon;