import React, { useState }  from 'react';
import axios from 'axios';

const ContactUs = () => {
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
      page:'1',

    }
    event.target.reset();
  
    try{
      setIsLoading(true);

      const res = await axios.post('https://proteq.co.in:8444/backend/api/contact-us', {
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
         
            <form onSubmit={sendContactForm}>
                <div className="form-row justify-content-center">
                  <div className="form-group col-lg-6 col-md-8 mb-0">
                    <input name="fullname" type="text" className="form-control" placeholder="Name" required />
                    <input name="email" type="email" className="form-control" placeholder="Email" required />
                    <input name="phone" type="text" className="form-control" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group col-lg-6 col-md-8">
                    <textarea name="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                  </div>
                  <div className="col-lg-12 col-md-8 text-right">
                    <button type="submit" className="btn hvr-sweep-to-right">Submit</button>
                  </div>
                </div>
              </form>
              {isLoading && <div>
            <h3>Sending Mail...</h3>
          </div>}
           { isSent && <div className="alert alert-success" role="alert">
                Mail sent sucessfully.
              </div>}
              { error && <div className="alert alert-danger" role="alert">
                Something went wrong.
              </div>}
        </div>
    );
};

export default ContactUs;