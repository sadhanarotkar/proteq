import React, { useEffect, useState }  from 'react';
import axios from 'axios';

const Quote = (props) => {
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

   
    const sendContactForm = async event =>{
        event.preventDefault();
      
        const contactDetails ={
          product:event.target.product.value,
          fullname: event.target.fullname.value,
          email:event.target.email.value,
          phone:event.target.phone.value,
          message:event.target.message.value,
          page:'2',
        }
        console.log(contactDetails);
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
           

            <div className="modal fade quoteModal" id="quoteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">  
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>            
            <div className="modal-body">
            {isLoading && <div>
            <h3>Sending Mail...</h3>
          </div>}

          { isSent && <div className="alert alert-success" role="alert">
                Mail sent sucessfully.
              </div>}

              { error && <div className="alert alert-danger" role="alert">
                Something went wrong.
              </div>}
              <h4>Share your feedback</h4>
              <p>Have any doubts or queries about our services? Wish to know anything our policy? Simply drop in your message by filling it in the loop below!</p>
            <form onSubmit={sendContactForm}>
                {/* <div className="form-group">
                  <select defaultValue={props.selected} name="product" className="form-control" required>
                    <option>Select Product</option>
                    <option value='ceramic'>Ceramic</option>
                    <option value='paint protectio film'>Paint Protection Film</option>
                    <option value='microfibre cloth'>Microfiber Cloth</option>
                  </select>
                </div> */}
                <div className="form-group">
                  <input name="fullname" type="text" className="form-control" placeholder="Name" required />
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
                <div className="text-right">
                  <button type="submit" className="btn hvr-fade">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Quote;