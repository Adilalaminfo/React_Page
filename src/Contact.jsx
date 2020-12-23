
import React, {useState} from "react"; 
const Contact= ()=>{
  
  const[data, setData]=useState({
   FullName:'',
   Phone:'',
   email:'',
   Message:'',
  });

  const InputEvent=(event)=>{
  	const{name, value}= event.target;
  	setData((preVal)=>{
  		return{
  		...preVal,[name]:value,
  	};
  });
};
 const formSubmit=(e)=>{
   e.preventDefault();
   alert(`My Name is ${data.FullName}.My Phone number ${data.Phone}. And my Email ${data.email}. My Message is ${data.Message} `);
 };
	return (
		<>
		<div className="my-3">
		 <h1 className="text-center">Contact us</h1>
		</div>
     <div className="container contact_div">
       <div className="row">
        <div className="col-md-6 col-10 mx-auto">
		<form onSubmit={formSubmit} >
   	 	 <div className="mb-3">
 		 <label for="exampleFormControlInput1" 
 		    className="form-label">Full Name</label>
  			<input type="text" 
  			className="form-control" 
  			id="exampleFormControlInput1"
  			name="FullName"
  			value={data.FullName}
  			onChange={InputEvent} 
  			placeholder="Enter Your Name" />
			</div>
			<div className="mb-3">
 		    <label for="exampleFormControlInput1" 
 		    className="form-label">Phone No.</label>
  			<input type="number" 
  			className="form-control" 
  			id="exampleFormControlInput1"
  			name="Phone"
  			value={data.Phone}
  			onChange={InputEvent} 
  			placeholder="Mobile No." />
			</div>
			<div className="mb-3">
 		 <label for="exampleFormControlInput1" 
 		    className="form-label">Email Address</label>
  			<input type="email" 
  			className="form-control" 
  			id="exampleFormControlInput1"
  			name="email"
  			value={data.email}
  			onChange={InputEvent} 
  			placeholder="Enter Your Email" />
			</div>
			<div className="mb-3">
  			<label for="exampleFormControlTextarea1"
  			 className="form-label">Message</label>
  			<textarea className="form-control" 
  			id="exampleFormControlTextarea1"
  			name="Message"
  			value={data.Message}
  			onChange={InputEvent} 
  			rows="3">
  			</textarea>
		    </div>
		    <div className="col-12">
   				 <button className="btn btn-outline-primary" type="submit">Submit form</button>
 				 </div>
				</form>
		</div>
		</div>
		</div>
		</>
		);
};
export default Contact;