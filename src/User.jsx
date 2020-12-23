import React from "react";
import {useParams,useLocation} from "react-router-dom";

const User= ()=>{
  const {fname , lname}=useParams();
  const location=useLocation();
	return (
	<>
	<h1>Hi I am {fname}  {lname} User </h1>
	<p> fds</p>
	</>
	);
};
export default User;